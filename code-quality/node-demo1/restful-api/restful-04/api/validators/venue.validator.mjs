import { body, param } from "express-validator";

export const createVenueValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Venue name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Venue name must be between 2 and 100 characters"),

  body("city")
    .trim()
    .notEmpty()
    .withMessage("City is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("City must be between 2 and 50 characters"),

  body("country")
    .trim()
    .notEmpty()
    .withMessage("Country is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Country must be between 2 and 50 characters"),

  body("capacity")
    .notEmpty()
    .withMessage("Capacity is required")
    .isInt({ min: 1 })
    .withMessage("Capacity must be a positive integer"),

  body("address")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Address must not exceed 200 characters"),

  body("surface")
    .optional()
    .isIn(["grass", "artificial", "hybrid"])
    .withMessage("Invalid surface type"),

  body("openedYear")
    .optional()
    .isInt({ min: 1800, max: new Date().getFullYear() })
    .withMessage(
      `Opened year must be between 1800 and ${new Date().getFullYear()}`,
    ),

  body("homeTeams")
    .optional()
    .isArray()
    .withMessage("Home teams must be an array"),

  body("homeTeams.*")
    .optional()
    .isMongoId()
    .withMessage("Invalid team ID format"),

  body("facilities")
    .optional()
    .isArray()
    .withMessage("Facilities must be an array"),

  body("facilities.*")
    .optional()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("Each facility must be between 1 and 50 characters"),
];

export const updateVenueValidation = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Venue name must be between 2 and 100 characters"),

  body("city")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("City must be between 2 and 50 characters"),

  body("country")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Country must be between 2 and 50 characters"),

  body("capacity")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Capacity must be a positive integer"),

  body("address")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Address must not exceed 200 characters"),

  body("surface")
    .optional()
    .isIn(["grass", "artificial", "hybrid"])
    .withMessage("Invalid surface type"),

  body("openedYear")
    .optional()
    .isInt({ min: 1800, max: new Date().getFullYear() })
    .withMessage(
      `Opened year must be between 1800 and ${new Date().getFullYear()}`,
    ),

  body("homeTeams")
    .optional()
    .isArray()
    .withMessage("Home teams must be an array"),

  body("homeTeams.*")
    .optional()
    .isMongoId()
    .withMessage("Invalid team ID format"),

  body("facilities")
    .optional()
    .isArray()
    .withMessage("Facilities must be an array"),
];

export const addHomeTeamValidation = [
  body("teamId")
    .notEmpty()
    .withMessage("Team ID is required")
    .isMongoId()
    .withMessage("Invalid team ID format"),
];

export const idValidation = [
  param("id")
    .notEmpty()
    .withMessage("ID is required")
    .isMongoId()
    .withMessage("Invalid ID format"),
];
