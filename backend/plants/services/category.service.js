import { Category } from "../models/category.model.js";
export const getAllCategories = async (req, res) => {
  const categoriesList = await Category.find();
  res.status(200).json(categoriesList);
};
