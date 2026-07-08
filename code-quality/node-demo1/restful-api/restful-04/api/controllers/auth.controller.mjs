import jwt from "jsonwebtoken";
import { User } from "../model/user.mjs";
import { generateTokens } from "../middleware/auth.mjs";
import { successResponse } from "../utils/responseFormatter.mjs";
import { UnauthorizedError, ConflictError } from "../utils/AppError.mjs";
import { config } from "../config/env.config.mjs";

export const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ConflictError("User with this email already exists");
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || "user",
    });

    const { accessToken, refreshToken } = generateTokens(user);

    successResponse(
      res,
      {
        user: user.toJSON(),
        accessToken,
        refreshToken,
      },
      "User registered successfully",
      201,
    );
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      throw new UnauthorizedError("Invalid email or password");
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid email or password");
    }

    if (!user.isActive) {
      throw new UnauthorizedError("Account is deactivated");
    }

    user.lastLogin = new Date();
    await user.save();

    const { accessToken, refreshToken } = generateTokens(user);

    successResponse(
      res,
      {
        user: user.toJSON(),
        accessToken,
        refreshToken,
      },
      "Login successful",
    );
  } catch (error) {
    next(error);
  }
};

export const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      throw new UnauthorizedError("Refresh token is required");
    }

    const decoded = jwt.verify(refreshToken, config.jwt.refreshSecret);
    const user = await User.findById(decoded.id);

    if (!user || !user.isActive) {
      throw new UnauthorizedError("Invalid refresh token");
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);

    successResponse(
      res,
      {
        accessToken,
        refreshToken: newRefreshToken,
      },
      "Token refreshed successfully",
    );
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    successResponse(res, req.user, "User retrieved successfully");
  } catch (error) {
    next(error);
  }
};
