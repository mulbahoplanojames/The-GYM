import { User } from "../model/user.mjs";
import {
  successResponse,
  paginatedResponse,
} from "../utils/responseFormatter.mjs";
import { NotFoundError, BadRequestError } from "../utils/AppError.mjs";
import {
  getPaginationParams,
  getSortParams,
  getFilterParams,
} from "../utils/pagination.mjs";

export const getUsers = async (req, res, next) => {
  try {
    const { page, limit, skip } = getPaginationParams(req);
    const sort = getSortParams(req, "-createdAt");
    const filter = getFilterParams(req, ["role", "isActive"]);

    const users = await User.find(filter)
      .select("-password")
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await User.countDocuments(filter);

    paginatedResponse(res, users, { page, limit, total });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      throw new NotFoundError("User not found");
    }
    successResponse(res, user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      throw new BadRequestError("User with this email already exists");
    }

    const user = await User.create(req.body);
    successResponse(res, user.toJSON(), "User created successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { password, email, ...updateData } = req.body;

    if (email) {
      const existingUser = await User.findOne({
        email,
        _id: { $ne: req.params.id },
      });
      if (existingUser) {
        throw new BadRequestError("Email already in use");
      }
      updateData.email = email;
    }

    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!user) {
      throw new NotFoundError("User not found");
    }

    successResponse(res, user, "User updated successfully");
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    successResponse(res, null, "User deleted successfully");
  } catch (error) {
    next(error);
  }
};
