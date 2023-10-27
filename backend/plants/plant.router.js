import { Router } from "express";
import { getAllPlants } from "./services/plant.service.js";
import { getAllCategories } from "./services/category.service.js";
const router = Router();

router.get("/", getAllPlants);
router.get("/categories", getAllCategories);

export { router };
