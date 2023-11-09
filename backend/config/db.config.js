import { connect } from "mongoose";
import { insertCategoryData } from "../plants/models/category.model.js";
import { insertPlantData } from "../plants/models/plant.model.js";

const connectToDB = async () => {
  try {
    const mongoose = await connect("mongodb://localhost:27017/plants-shopping");
    await insertCategoryData();
    await insertPlantData();
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
