import { User } from "../model/user.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

dotenv.config();

const secretKey = process.env.JWT_SECRET;

router.post("/register", async (request, response, next) => {
  try {
    const { name, email, password, role } = request.body;

    const user = await User.findOne({ email });
    if (user) {
      return response.status(400).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      password: hashedPassword,
      role,
    });
    await newUser
      .save()
      .then((result) => {
        response.status(201).json({
          message: "User created successfully",
          user: newUser,
        });
      })
      .catch((error) => {
        response.status(500).json({
          message: "Failed to create user",
          error: error.message,
        });
      });
  } catch (error) {
    response.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
});

router.post("/login", async (request, response, next) => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ email });
    if (!user) {
      return response.status(400).json({
        message: "User not found",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return response.status(400).json({
        message: "Invalid password",
      });
    }
    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id,
      },
      secretKey,
      { expiresIn: "1h" },
    );
    response.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    response.status(500).json({
      message: "Failed to login",
      error: error.message,
    });
  }
});

export default router;
