import { Schema, model } from "mongoose";
const Category = model(
  "Category",
  new Schema({
    name: String,
  })
);

const categoryList = [
  { name: "classique" },
  { name: "extérieur" },
  { name: "plante grasse" },
];

export async function insertCategoryData() {
  try {
    await Category.deleteMany();
    for (const categoryData of categoryList) {
      const category = new Category(categoryData);
      await category.save();
    }
    console.log("Category data inserted successfully!");
  } catch (error) {
    console.error("Error inserting category data:", error);
  }
}

export { Category };
