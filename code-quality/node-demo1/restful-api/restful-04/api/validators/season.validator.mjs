import { body, param } from "express-validator";

export const createSeasonValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Season name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Season name must be between 2 and 100 characters"),

  body("year")
    .trim()
    .notEmpty()
    .withMessage("Year is required")
    .isLength({ min: 4, max: 10 })
    .withMessage("Year must be between 4 and 10 characters"),

  body("startDate")
    .notEmpty()
    .withMessage("Start date is required")
    .isISO8601()
    .withMessage("Invalid start date format"),

  body("endDate")
    .notEmpty()
    .withMessage("End date is required")
    .isISO8601()
    .withMessage("Invalid end date format")
    .custom((value, { req }) => {
      if (req.body.startDate && value) {
        const startDate = new Date(req.body.startDate);
        const endDate = new Date(value);
        if (endDate <= startDate) {
          throw new Error("End date must be after start date");
        }
      }
      return true;
    }),

  body("competition")
    .trim()
    .notEmpty()
    .withMessage("Competition is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Competition must be between 2 and 100 characters"),

  body("competitionType")
    .optional()
    .isIn(["league", "cup", "tournament", "friendly"])
    .withMessage("Invalid competition type"),

  body("teams").optional().isArray().withMessage("Teams must be an array"),

  body("teams.*").optional().isMongoId().withMessage("Invalid team ID format"),

  body("fixtures")
    .optional()
    .isArray()
    .withMessage("Fixtures must be an array"),

  body("fixtures.*")
    .optional()
    .isMongoId()
    .withMessage("Invalid fixture ID format"),

  body("winner")
    .optional()
    .isMongoId()
    .withMessage("Invalid winner team ID format"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description must not exceed 500 characters"),
];

export const updateSeasonValidation = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Season name must be between 2 and 100 characters"),

  body("year")
    .optional()
    .trim()
    .isLength({ min: 4, max: 10 })
    .withMessage("Year must be between 4 and 10 characters"),

  body("startDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid start date format"),

  body("endDate").optional().isISO8601().withMessage("Invalid end date format"),

  body("competition")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Competition must be between 2 and 100 characters"),

  body("competitionType")
    .optional()
    .isIn(["league", "cup", "tournament", "friendly"])
    .withMessage("Invalid competition type"),

  body("teams").optional().isArray().withMessage("Teams must be an array"),

  body("teams.*").optional().isMongoId().withMessage("Invalid team ID format"),

  body("fixtures")
    .optional()
    .isArray()
    .withMessage("Fixtures must be an array"),

  body("fixtures.*")
    .optional()
    .isMongoId()
    .withMessage("Invalid fixture ID format"),

  body("winner")
    .optional()
    .isMongoId()
    .withMessage("Invalid winner team ID format"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description must not exceed 500 characters"),
];

export const addTeamValidation = [
  body("teamId")
    .notEmpty()
    .withMessage("Team ID is required")
    .isMongoId()
    .withMessage("Invalid team ID format"),
];

export const setWinnerValidation = [
  body("winnerId")
    .notEmpty()
    .withMessage("Winner ID is required")
    .isMongoId()
    .withMessage("Invalid winner team ID format"),
];

export const idValidation = [
  param("id")
    .notEmpty()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID format"),
];
