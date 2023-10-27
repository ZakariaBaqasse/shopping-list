/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getAllCategories } from "../utils/getCategories";
import classes from "./categories.module.css";

const Categories = ({ setCategory, category }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesList = await getAllCategories();
        // Update your state or component here with the fetched categories
        setCategories(categoriesList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className={`${classes["categories-container"]}`}>
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category.name}
      >
        <option value="all">Toutes les plantes</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button onClick={() => setCategory("all")}>Reinitialiser</button>
    </div>
  );
};

export default Categories;
