import express from "express";
import {
  getStatistics,
  getStatisticsById,
  getEntityStatistics,
  createStatistics,
  updateStatistics,
  deleteStatistics,
  getTopScorers,
  getTeamStandings,
} from "../controllers/statistics.controller.mjs";
import {
  createStatisticsValidation,
  updateStatisticsValidation,
  idValidation,
} from "../validators/statistics.validator.mjs";
import { validateRequest } from "../middleware/validation.mjs";
import { authenticate, authorize } from "../middleware/auth.mjs";

const router = express.Router();

router.get("/", getStatistics);
router.get("/top-scorers", getTopScorers);
router.get("/standings", getTeamStandings);
router.get("/:id", idValidation, validateRequest, getStatisticsById);
router.get("/entity/:entityType/:entityId", getEntityStatistics);
router.post(
  "/",
  authenticate,
  authorize("admin", "staff"),
  createStatisticsValidation,
  validateRequest,
  createStatistics
);
router.put(
  "/:id",
  authenticate,
  authorize("admin", "staff"),
  idValidation,
  updateStatisticsValidation,
  validateRequest,
  updateStatistics
);
router.delete(
  "/:id",
  authenticate,
  authorize("admin"),
  idValidation,
  validateRequest,
  deleteStatistics
);

export default router;
