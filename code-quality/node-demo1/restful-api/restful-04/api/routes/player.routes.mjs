import express from "express";
import {
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
  getPlayerStats,
  updatePlayerStats,
} from "../controllers/player.controller.mjs";
import {
  createPlayerValidation,
  updatePlayerValidation,
  updatePlayerStatsValidation,
  idValidation,
} from "../validators/player.validator.mjs";
import { validateRequest } from "../middleware/validation.mjs";
import { authenticate, authorize } from "../middleware/auth.mjs";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id", idValidation, validateRequest, getPlayerById);
router.get("/:id/stats", idValidation, validateRequest, getPlayerStats);
router.post(
  "/",
  authenticate,
  authorize("admin", "staff"),
  createPlayerValidation,
  validateRequest,
  createPlayer
);
router.put(
  "/:id",
  authenticate,
  authorize("admin", "staff"),
  idValidation,
  updatePlayerValidation,
  validateRequest,
  updatePlayer
);
router.patch(
  "/:id/stats",
  authenticate,
  authorize("admin", "staff"),
  idValidation,
  updatePlayerStatsValidation,
  validateRequest,
  updatePlayerStats
);
router.delete(
  "/:id",
  authenticate,
  authorize("admin"),
  idValidation,
  validateRequest,
  deletePlayer
);

export default router;
