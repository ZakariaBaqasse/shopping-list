import { model, Schema } from "mongoose";
import { Category } from "./category.model.js";

const Plant = model(
  "Plant",
  new Schema({
    name: String,
    light: Number,
    water: Number,
    cover: String,
    price: Number,
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  })
);

export const plantList = [
  {
    name: "monstera",
    category: "classique",
    id: "1ed",
    light: 2,
    water: 3,
    cover: "monstera",
    price: 15,
  },
  {
    name: "ficus lyrata",
    category: "classique",
    id: "2ab",
    light: 3,
    water: 1,
    cover: "lyrata",
    price: 16,
  },

  {
    name: "pothos argenté",
    category: "classique",
    id: "3sd",
    light: 1,
    water: 2,
    cover: "pothos",

    price: 9,
  },
  {
    name: "calathea",
    category: "classique",
    id: "4kk",
    light: 2,
    water: 3,
    cover: "calathea",

    price: 20,
  },
  {
    name: "olivier",
    category: "extérieur",
    id: "5pl",
    light: 3,
    water: 1,
    cover: "olivier",
    price: 25,
  },

  {
    name: "cactus",
    category: "plante grasse",
    id: "8fp",
    light: 2,
    water: 1,
    cover: "cactus",
    price: 6,
  },
  {
    name: "basilique",
    category: "extérieur",
    id: "7ie",
    light: 2,
    water: 3,
    cover: "basil",
    price: 5,
  },
  {
    name: "succulente",
    category: "plante grasse",
    id: "9vn",
    light: 2,
    water: 1,
    cover: "succulent",
    price: 8,
  },

  {
    name: "menthe",
    category: "extérieur",
    id: "6uo",
    light: 2,
    water: 2,
    cover: "mint",
    price: 4,
  },
];

export async function insertPlantData() {
  try {
    await Plant.deleteMany();
    for (const plantData of plantList) {
      const category = await Category.findOne({ name: plantData.category });
      plantData.category = category._id; // Use the category's ObjectId as the reference

      const plant = new Plant(plantData);
      await plant.save();
    }

    console.log("Plant data inserted successfully!");
  } catch (error) {
    console.error("Error inserting plant data:", error);
  }
}

export default Plant;
