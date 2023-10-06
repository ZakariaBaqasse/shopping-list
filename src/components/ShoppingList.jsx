/* eslint-disable react/prop-types */
import { plantList } from "../data/plants";
import PlantItem from "./PlantItem";
import classes from "./shoppingList.module.css";

const ShoppingList = ({ addToCart, category }) => {
  const filteredPlantList = plantList.filter((plant) => {
    if (category === "all") {
      return true;
    }
    return plant.category === category;
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
