/* eslint-disable react/prop-types */
import { plantList } from "../data/plants";
import classes from "./categories.module.css";

const Categories = ({ setCategory, category }) => {
  const categories = plantList.reduce((acc, plant) => {
    if (!acc.includes(plant.category)) {
      acc.push(plant.category);
    }
    return acc;
  }, []);
  return (
    <div className={`${classes["categories-container"]}`}>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="all">Toutes les plantes</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => setCategory("all")}>Reinitialiser</button>
    </div>
  );
};

export default Categories;
