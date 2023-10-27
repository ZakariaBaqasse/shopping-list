import { Category } from "../db.js";

export const findAllCategories = async () => {
  return await Category.findAll();
};
