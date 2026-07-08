import express from "express";
import {
  getVenues,
  getVenueById,
  createVenue,
  updateVenue,
  deleteVenue,
  addHomeTeam,
  removeHomeTeam,
} from "../controllers/venue.controller.mjs";
import {
  createVenueValidation,
  updateVenueValidation,
  addHomeTeamValidation,
  idValidation,
} from "../validators/venue.validator.mjs";
import { validateRequest } from "../middleware/validation.mjs";
import { authenticate, authorize } from "../middleware/auth.mjs";

const router = express.Router();

router.get("/", getVenues);
router.get("/:id", idValidation, validateRequest, getVenueById);
router.post(
  "/",
  authenticate,
  authorize("admin", "staff"),
  createVenueValidation,
  validateRequest,
  createVenue
);
router.put(
  "/:id",
  authenticate,
  authorize("admin", "staff"),
  idValidation,
  updateVenueValidation,
  validateRequest,
  updateVenue
);
router.post(
  "/:id/home-teams",
  authenticate,
  authorize("admin", "staff"),
  idValidation,
  addHomeTeamValidation,
  validateRequest,
  addHomeTeam
);
router.delete(
  "/:id/home-teams/:teamId",
  authenticate,
  authorize("admin", "staff"),
  idValidation,
  validateRequest,
  removeHomeTeam
);
router.delete(
  "/:id",
  authenticate,
  authorize("admin"),
  idValidation,
  validateRequest,
  deleteVenue
);

export default router;
