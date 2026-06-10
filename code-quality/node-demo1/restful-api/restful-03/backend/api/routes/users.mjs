import mongoose from "mongoose";
import { User } from "../model/user.mjs";
import express from "express";

const router = express.Router();

router.get("/get-users", async (request, response, next) => {
  try {
    const users = await User.find().select("email name role");
    response.status(200).json({
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    response.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
});

router.delete("/delete-user/:userId", async (request, response, next) => {
  try {
    const { userId } = request.params;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return response.status(404).json({
        message: "User not found",
      });
    }
    response.status(200).json({
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    response.status(500).json({
      message: "Failed to delete user",
      error: error.message,
    });
  }
});

export default router;
