import express from "express";
import {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/team.controller.mjs";
import {
  createTeamValidation,
  updateTeamValidation,
  idValidation,
} from "../validators/team.validator.mjs";
import { validateRequest } from "../middleware/validation.mjs";
import { authenticate, authorize } from "../middleware/auth.mjs";

const router = express.Router();

router.get("/", getTeams);
router.get("/:id", idValidation, validateRequest, getTeamById);
router.post(
  "/",
  authenticate,
  authorize("admin", "staff"),
  createTeamValidation,
  validateRequest,
  createTeam
);
router.put(
  "/:id",
  authenticate,
  authorize("admin", "staff"),
  idValidation,
  updateTeamValidation,
  validateRequest,
  updateTeam
);
router.delete(
  "/:id",
  authenticate,
  authorize("admin"),
  idValidation,
  validateRequest,
  deleteTeam
);

export default router;
