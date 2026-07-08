import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
import {
  registerValidation,
  updateUserValidation,
  idValidation,
  paginationValidation,
} from "../validators/user.validator.mjs";
import { validateRequest } from "../middleware/validation.mjs";
import { authenticate, authorize } from "../middleware/auth.mjs";

const router = express.Router();

router.get("/", paginationValidation, validateRequest, getUsers);
router.get("/:id", idValidation, validateRequest, getUserById);
router.post(
  "/",
  authenticate,
  authorize("admin"),
  registerValidation,
  validateRequest,
  createUser,
);
router.put(
  "/:id",
  authenticate,
  authorize("admin"),
  idValidation,
  updateUserValidation,
  validateRequest,
  updateUser,
);
router.delete(
  "/:id",
  authenticate,
  authorize("admin"),
  idValidation,
  validateRequest,
  deleteUser,
);

export default router;
