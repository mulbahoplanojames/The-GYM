import { body, param } from "express-validator";

export const createFixtureValidation = [
  body("homeTeam")
    .notEmpty()
    .withMessage("Home team is required")
    .isMongoId()
    .withMessage("Invalid home team ID format"),

  body("awayTeam")
    .notEmpty()
    .withMessage("Away team is required")
    .isMongoId()
    .withMessage("Invalid away team ID format")
    .custom(async (value, { req }) => {
      if (value === req.body.homeTeam) {
        throw new Error("Home team and away team cannot be the same");
      }
      return true;
    }),

  body("homeGoals")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Home goals must be a non-negative integer"),

  body("awayGoals")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Away goals must be a non-negative integer"),

  body("status")
    .optional()
    .isIn(["pending", "completed", "in-progress"])
    .withMessage("Invalid status. Must be pending, completed, or in-progress"),

  body("fixtureDate")
    .notEmpty()
    .withMessage("Fixture date is required")
    .isISO8601()
    .withMessage("Invalid date format")
    .custom((value) => {
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
      }
      return true;
    }),
];

export const updateFixtureValidation = [
  body("homeTeam")
    .optional()
    .isMongoId()
    .withMessage("Invalid home team ID format"),

  body("awayTeam")
    .optional()
    .isMongoId()
    .withMessage("Invalid away team ID format"),

  body("homeGoals")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Home goals must be a non-negative integer"),

  body("awayGoals")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Away goals must be a non-negative integer"),

  body("status")
    .optional()
    .isIn(["pending", "completed", "in-progress"])
    .withMessage("Invalid status. Must be pending, completed, or in-progress"),

  body("fixtureDate").optional().isISO8601().withMessage("Invalid date format"),
];

export const idValidation = [
  param("id")
    .notEmpty()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID format"),
];
