import express from "express";
import {
  getFixtures,
  getFixtureById,
  createFixture,
  updateFixture,
  deleteFixture,
} from "../controllers/fixture.controller.mjs";
import {
  createFixtureValidation,
  updateFixtureValidation,
  idValidation,
} from "../validators/fixture.validator.mjs";
import { validateRequest } from "../middleware/validation.mjs";
import { authenticate, authorize } from "../middleware/auth.mjs";

const router = express.Router();

router.get("/", getFixtures);
router.get("/:id", idValidation, validateRequest, getFixtureById);
router.post(
  "/",
  authenticate,
  authorize("admin", "staff"),
  createFixtureValidation,
  validateRequest,
  createFixture
);
router.put(
  "/:id",
  authenticate,
  authorize("admin", "staff"),
  idValidation,
  updateFixtureValidation,
  validateRequest,
  updateFixture
);
router.delete(
  "/:id",
  authenticate,
  authorize("admin"),
  idValidation,
  validateRequest,
  deleteFixture
);

export default router;
