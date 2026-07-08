import { errorResponse } from "../utils/responseFormatter.mjs";
import { AppError } from "../utils/AppError.mjs";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return errorResponse(res, err, err.statusCode);
  }

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => e.message);
    return errorResponse(res, { message: "Validation failed", errors }, 400);
  }

  if (err.name === "CastError") {
    return errorResponse(res, { message: "Invalid ID format" }, 400);
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return errorResponse(res, { message: `${field} already exists` }, 409);
  }

  if (err.name === "JsonWebTokenError") {
    return errorResponse(res, { message: "Invalid token" }, 401);
  }

  if (err.name === "TokenExpiredError") {
    return errorResponse(res, { message: "Token expired" }, 401);
  }

  console.error("ERROR:", err);
  return errorResponse(res, err, 500);
};

export const notFoundHandler = (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.statusCode = 404;
  next(error);
};
