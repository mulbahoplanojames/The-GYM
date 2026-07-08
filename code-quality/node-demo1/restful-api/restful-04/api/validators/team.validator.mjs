import { body, param } from "express-validator";

export const createTeamValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Team name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Team name must be between 2 and 100 characters"),

  body("coach.name")
    .trim()
    .notEmpty()
    .withMessage("Coach name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Coach name must be between 2 and 50 characters"),

  body("coach.age")
    .notEmpty()
    .withMessage("Coach age is required")
    .isInt({ min: 18, max: 100 })
    .withMessage("Coach age must be between 18 and 100"),

  body("coach.nationality")
    .trim()
    .notEmpty()
    .withMessage("Coach nationality is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Coach nationality must be between 2 and 50 characters"),

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

  body("points")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Points must be a non-negative integer"),
];

export const updateTeamValidation = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Team name must be between 2 and 100 characters"),

  body("coach.name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Coach name must be between 2 and 50 characters"),

  body("coach.age")
    .optional()
    .isInt({ min: 18, max: 100 })
    .withMessage("Coach age must be between 18 and 100"),

  body("coach.nationality")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Coach nationality must be between 2 and 50 characters"),

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

  body("points")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Points must be a non-negative integer"),
];

export const idValidation = [
  param("id")
    .notEmpty()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID format"),
];
