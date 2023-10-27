import { findAllPlants } from "../models/plant.model.js";

export const getAllPlants = async (req, res) => {
  const plantList = await findAllPlants();
  res.status(200).json(plantList);
};
