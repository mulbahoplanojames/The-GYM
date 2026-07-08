import { body, param } from "express-validator";

export const createPlayerValidation = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("First name must be between 2 and 50 characters"),

  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Last name must be between 2 and 50 characters"),

  body("dateOfBirth")
    .notEmpty()
    .withMessage("Date of birth is required")
    .isISO8601()
    .withMessage("Invalid date format")
    .custom((value) => {
      const birthDate = new Date(value);
      const today = new Date();
      const minAge = 16;
      const maxAge = 50;
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < minAge || age > maxAge) {
        throw new Error(`Player age must be between ${minAge} and ${maxAge}`);
      }
      return true;
    }),

  body("nationality")
    .trim()
    .notEmpty()
    .withMessage("Nationality is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Nationality must be between 2 and 50 characters"),

  body("position")
    .notEmpty()
    .withMessage("Position is required")
    .isIn([
      "goalkeeper",
      "defender",
      "midfielder",
      "forward",
      "striker",
      "winger",
    ])
    .withMessage("Invalid position"),

  body("jerseyNumber")
    .notEmpty()
    .withMessage("Jersey number is required")
    .isInt({ min: 1, max: 99 })
    .withMessage("Jersey number must be between 1 and 99"),

  body("team")
    .notEmpty()
    .withMessage("Team is required")
    .isMongoId()
    .withMessage("Invalid team ID format"),

  body("height")
    .optional()
    .isInt({ min: 100, max: 250 })
    .withMessage("Height must be between 100 and 250 cm"),

  body("weight")
    .optional()
    .isInt({ min: 30, max: 150 })
    .withMessage("Weight must be between 30 and 150 kg"),

  body("stats.goals")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Goals must be a non-negative integer"),

  body("stats.assists")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Assists must be a non-negative integer"),

  body("stats.appearances")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Appearances must be a non-negative integer"),

  body("stats.yellowCards")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Yellow cards must be a non-negative integer"),

  body("stats.redCards")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Red cards must be a non-negative integer"),

  body("contractStart")
    .optional()
    .isISO8601()
    .withMessage("Invalid contract start date format"),

  body("contractEnd")
    .optional()
    .isISO8601()
    .withMessage("Invalid contract end date format")
    .custom((value, { req }) => {
      if (req.body.contractStart && value) {
        const startDate = new Date(req.body.contractStart);
        const endDate = new Date(value);
        if (endDate <= startDate) {
          throw new Error("Contract end date must be after start date");
        }
      }
      return true;
    }),

  body("marketValue")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Market value must be a non-negative integer"),
];

export const updatePlayerValidation = [
  body("firstName")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("First name must be between 2 and 50 characters"),

  body("lastName")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Last name must be between 2 and 50 characters"),

  body("dateOfBirth").optional().isISO8601().withMessage("Invalid date format"),

  body("nationality")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Nationality must be between 2 and 50 characters"),

  body("position")
    .optional()
    .isIn([
      "goalkeeper",
      "defender",
      "midfielder",
      "forward",
      "striker",
      "winger",
    ])
    .withMessage("Invalid position"),

  body("jerseyNumber")
    .optional()
    .isInt({ min: 1, max: 99 })
    .withMessage("Jersey number must be between 1 and 99"),

  body("team").optional().isMongoId().withMessage("Invalid team ID format"),

  body("height")
    .optional()
    .isInt({ min: 100, max: 250 })
    .withMessage("Height must be between 100 and 250 cm"),

  body("weight")
    .optional()
    .isInt({ min: 30, max: 150 })
    .withMessage("Weight must be between 30 and 150 kg"),

  body("stats.goals")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Goals must be a non-negative integer"),

  body("stats.assists")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Assists must be a non-negative integer"),

  body("stats.appearances")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Appearances must be a non-negative integer"),

  body("stats.yellowCards")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Yellow cards must be a non-negative integer"),

  body("stats.redCards")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Red cards must be a non-negative integer"),

  body("contractStart")
    .optional()
    .isISO8601()
    .withMessage("Invalid contract start date format"),

  body("contractEnd")
    .optional()
    .isISO8601()
    .withMessage("Invalid contract end date format"),

  body("marketValue")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Market value must be a non-negative integer"),
];

export const updatePlayerStatsValidation = [
  body("goals")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Goals must be a non-negative integer"),

  body("assists")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Assists must be a non-negative integer"),

  body("appearances")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Appearances must be a non-negative integer"),

  body("yellowCards")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Yellow cards must be a non-negative integer"),

  body("redCards")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Red cards must be a non-negative integer"),
];

export const idValidation = [
  param("id")
    .notEmpty()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID format"),
];
