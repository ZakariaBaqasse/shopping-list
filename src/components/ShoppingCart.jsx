/* eslint-disable react/prop-types */
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import classes from "./home.module.css";
import { useState, useEffect } from "react";

const ShoppingCart = ({ category }) => {
  const [cartItems, setCartItems] = useState([]);
  const storageCart = window.localStorage.getItem("cart");
  useEffect(() => {
    if (storageCart) {
      setCartItems(JSON.parse(storageCart));
    }
  }, [storageCart]);

  const emptyCart = () => {
    setCartItems([]);
    window.localStorage.setItem("cart", JSON.stringify([]));
  };
  const addToCart = (name, price) => {
    let currentAddedPlants = JSON.parse(window.localStorage.getItem("cart"));
    const plantToAdd = { name, price };
    if (currentAddedPlants) {
      const plantExists = currentAddedPlants.find(
        (plant) => plant.name === name
      );
      if (plantExists) {
        plantExists.quantity += 1;
      } else {
        plantToAdd.quantity = 1;
        currentAddedPlants.push(plantToAdd);
      }
    } else {
      plantToAdd.quantity = 1;
      currentAddedPlants = [plantToAdd];
    }
    window.localStorage.setItem("cart", JSON.stringify(currentAddedPlants));
    setCartItems(currentAddedPlants);
  };
  return (
    <div className={`${classes.container}`}>
      <Cart cartItems={cartItems} emptyCart={emptyCart} />
      <ShoppingList addToCart={addToCart} category={category} />
    </div>
  );
};

export default ShoppingCart;
