import { validationResult } from "express-validator";
import { ValidationError } from "../utils/AppError.mjs";

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => ({
      field: error.path,
      message: error.msg,
    }));
    
    return next(new ValidationError("Validation failed"));
  }
  
  next();
};
