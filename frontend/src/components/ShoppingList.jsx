/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getAllPlants } from "../utils/getPlants";
import PlantItem from "./PlantItem";
import classes from "./shoppingList.module.css";

const ShoppingList = ({ addToCart, category }) => {
  const [plantList, setPlantList] = useState([]);
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const plants = await getAllPlants();
        // Update your state or component here with the fetched categories
        setPlantList(plants);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchPlants();
  }, []);
  const filteredPlantList = plantList.filter((plant) => {
    if (category === "all") {
      return true;
    }
    return plant.Category.name === category;
  });
  return (
    <div
      className={`${
        category === "all"
          ? classes["shopping-list"]
          : classes["shopping-list-filtered"]
      }`}
    >
      {filteredPlantList.map((plant) => {
        return (
          <PlantItem plant={plant} key={plant.name} addToCart={addToCart} />
        );
      })}
    </div>
  );
};

export default ShoppingList;
