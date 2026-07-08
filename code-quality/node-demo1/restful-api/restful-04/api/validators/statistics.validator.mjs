import { body, param } from "express-validator";

export const createStatisticsValidation = [
  body("entityType")
    .trim()
    .notEmpty()
    .withMessage("Entity type is required")
    .isIn(["player", "team"])
    .withMessage("Entity type must be player or team"),

  body("entityId")
    .notEmpty()
    .withMessage("Entity ID is required")
    .isMongoId()
    .withMessage("Invalid entity ID format"),

  body("season")
    .trim()
    .notEmpty()
    .withMessage("Season is required")
    .isLength({ min: 2, max: 20 })
    .withMessage("Season must be between 2 and 20 characters"),

  body("competition")
    .trim()
    .notEmpty()
    .withMessage("Competition is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Competition must be between 2 and 100 characters"),

  body("matchesPlayed")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Matches played must be a non-negative integer"),

  body("wins")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Wins must be a non-negative integer"),

  body("draws")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Draws must be a non-negative integer"),

  body("losses")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Losses must be a non-negative integer"),

  body("goals")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Goals must be a non-negative integer"),

  body("assists")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Assists must be a non-negative integer"),

  body("cleanSheets")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Clean sheets must be a non-negative integer"),

  body("yellowCards")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Yellow cards must be a non-negative integer"),

  body("redCards")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Red cards must be a non-negative integer"),

  body("minutesPlayed")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Minutes played must be a non-negative integer"),

  body("goalsConceded")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Goals conceded must be a non-negative integer"),

  body("shots")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Shots must be a non-negative integer"),

  body("shotsOnTarget")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Shots on target must be a non-negative integer"),

  body("passes")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Passes must be a non-negative integer"),

  body("passAccuracy")
    .optional()
    .isFloat({ min: 0, max: 100 })
    .withMessage("Pass accuracy must be between 0 and 100"),

  body("tackles")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Tackles must be a non-negative integer"),

  body("interceptions")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Interceptions must be a non-negative integer"),

  body("duelsWon")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Duels won must be a non-negative integer"),

  body("aerialsWon")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Aerials won must be a non-negative integer"),
];

export const updateStatisticsValidation = [
  body("matchesPlayed")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Matches played must be a non-negative integer"),

  body("wins")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Wins must be a non-negative integer"),

  body("draws")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Draws must be a non-negative integer"),

  body("losses")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Losses must be a non-negative integer"),

  body("goals")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Goals must be a non-negative integer"),

  body("assists")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Assists must be a non-negative integer"),

  body("cleanSheets")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Clean sheets must be a non-negative integer"),

  body("yellowCards")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Yellow cards must be a non-negative integer"),

  body("redCards")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Red cards must be a non-negative integer"),

  body("minutesPlayed")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Minutes played must be a non-negative integer"),

  body("goalsConceded")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Goals conceded must be a non-negative integer"),

  body("shots")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Shots must be a non-negative integer"),

  body("shotsOnTarget")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Shots on target must be a non-negative integer"),

  body("passes")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Passes must be a non-negative integer"),

  body("passAccuracy")
    .optional()
    .isFloat({ min: 0, max: 100 })
    .withMessage("Pass accuracy must be between 0 and 100"),

  body("tackles")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Tackles must be a non-negative integer"),

  body("interceptions")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Interceptions must be a non-negative integer"),

  body("duelsWon")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Duels won must be a non-negative integer"),

  body("aerialsWon")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Aerials won must be a non-negative integer"),
];

export const idValidation = [
  param("id")
    .notEmpty()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID format"),
];
