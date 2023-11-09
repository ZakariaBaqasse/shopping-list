import { Router } from "express";
import { insertOrderAction } from "./services/order.service.js";

const router = Router();

router.post("/new", insertOrderAction);

export { router };
