import { Router } from "express";
import { loginAction, signupAction } from "./services/user.service.js";

const router = Router();

router.post("/login", loginAction);
router.post("/signup", signupAction);

export { router };
