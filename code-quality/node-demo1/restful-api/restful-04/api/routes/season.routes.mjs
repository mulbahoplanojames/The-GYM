import express from "express";
import {
  getSeasons,
  getSeasonById,
  createSeason,
  updateSeason,
  deleteSeason,
  addTeamToSeason,
  removeTeamFromSeason,
  setSeasonWinner,
} from "../controllers/season.controller.mjs";
import {
  createSeasonValidation,
  updateSeasonValidation,
  addTeamValidation,
  setWinnerValidation,
  idValidation,
} from "../validators/season.validator.mjs";
import { validateRequest } from "../middleware/validation.mjs";
import { authenticate, authorize } from "../middleware/auth.mjs";

const router = express.Router();

router.get("/", getSeasons);
router.get("/:id", idValidation, validateRequest, getSeasonById);
router.post(
  "/",
  authenticate,
  authorize("admin", "staff"),
  createSeasonValidation,
  validateRequest,
  createSeason
);
router.put(
  "/:id",
  authenticate,
  authorize("admin", "staff"),
  idValidation,
  updateSeasonValidation,
  validateRequest,
  updateSeason
);
router.post(
  "/:id/teams",
  authenticate,
  authorize("admin", "staff"),
  idValidation,
  addTeamValidation,
  validateRequest,
  addTeamToSeason
);
router.delete(
  "/:id/teams/:teamId",
  authenticate,
  authorize("admin", "staff"),
  idValidation,
  validateRequest,
  removeTeamFromSeason
);
router.post(
  "/:id/winner",
  authenticate,
  authorize("admin"),
  idValidation,
  setWinnerValidation,
  validateRequest,
  setSeasonWinner
);
router.delete(
  "/:id",
  authenticate,
  authorize("admin"),
  idValidation,
  validateRequest,
  deleteSeason
);

export default router;
