import express from "express";
import { register, login, refreshToken, getMe } from "../controllers/auth.controller.mjs";
import { registerValidation, loginValidation } from "../validators/user.validator.mjs";
import { validateRequest } from "../middleware/validation.mjs";
import { authenticate } from "../middleware/auth.mjs";

const router = express.Router();

router.post("/register", registerValidation, validateRequest, register);
router.post("/login", loginValidation, validateRequest, login);
router.post("/refresh-token", refreshToken);
router.get("/me", authenticate, getMe);

export default router;
