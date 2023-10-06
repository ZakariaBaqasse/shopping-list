/* eslint-disable react/prop-types */

import CareScale from "./CareScale";
import classes from "./plantItem.module.css";

const PlantItem = ({ plant, addToCart }) => {
  return (
    <div className={`${classes["item-container"]}`}>
      <div className={`${classes["cover-container"]}`}>
        <img src={plant.cover} />
        <div className={`${classes.price}`}>{plant.price} $</div>
      </div>
      <p>{plant.name}</p>
      <CareScale careType="water" scale={plant.water} />
      <CareScale careType="light" scale={plant.light} />
      <button onClick={() => addToCart(plant.name, plant.price)}>
        Ajouter
      </button>
    </div>
  );
};

export default PlantItem;
