import { Category, Plant } from "../db.js";

export const findAllPlants = async () => {
  return await Plant.findAll({ include: Category });
};
