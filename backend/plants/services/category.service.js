import { findAllCategories } from "../models/category.model.js";

export const getAllCategories = async (req, res) => {
  const categoriesList = await findAllCategories();
  res.status(200).json(categoriesList);
};
