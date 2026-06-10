import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../modals/user.mjs";
dotenv.config();

const router = express.Router();
const JWT_KEY = process.env.JWT_SECRET;

router.get("/", async (request, response, next) => {
  try {
    const users = await User.find().select("_id username email role");

    response.status(200).json({
      message: "Users Fetched Successfully",
      count: users.length,
      result: users.map((user) => {
        return {
          _id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          request: {
            type: "GET",
            url: `${process.env.BASE_URL}/user/${user._id}`,
          },
        };
      }),
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Failed to Fetch Users",
      error: error,
    });
  }
});

router.get("/:userId", async (request, response, next) => {
  const id = request.params.userId;
  try {
    const user = await User.findById(id);
    if (user) {
      response.status(200).json({
        message: "User Fetched Successfully",
        result: user,
        request: {
          type: "GET",
          url: `${process.env.BASE_URL}/user/${id}`,
        },
      });
    }
    response.status(404).json({
      message: "User Not Found",
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Failed to Fetch User",
      error: error,
    });
  }
});

router.post("/signup", async (request, response, next) => {
  try {
    const user = await User.find({ email: request.body.email });

    if (user.length >= 1) {
      return response.status(409).json({
        message: "User already exists",
      });
    }

    await bcrypt.hash(request.body.password, 10, (error, hashedPassword) => {
      if (error) {
        return response.status(500).json({
          message: "Failed to Create User",
          error: error,
        });
      }

      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        username: request.body.username,
        email: request.body.email,
        password: hashedPassword,
        role: request.body.role,
      });

      newUser
        .save()
        .then((result) => {
          response.status(201).json({
            message: "User Created Successfully",
            result: result,
          });
        })
        .catch((error) => {
          console.error(error);
          response.status(500).json({
            message: "Failed to Create User",
            error: error,
          });
        });
    });
  } catch (error) {
    response.status(500).json({
      message: "Failed to Create User",
      error: error,
    });
  }
});

router.post("/login", async (request, response, next) => {
  try {
    const user = await User.findOne({
      email: request.body.email,
    });

    if (!user) {
      return response.status(401).json({
        message: "Auth Failed",
      });
    }

    await bcrypt.compare(
      request.body.password,
      user.password,
      (error, result) => {
        if (error) {
          response.status(500).json({
            message: "Failed to Login",
            error: error,
          });
        }

        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
              role: user.role,
            },
            JWT_KEY,
            {
              expiresIn: "1h",
            },
          );

          return response.status(200).json({
            message: "Login Successful",
            token: token,
          });
        }

        return response.status(401).json({
          message: "Auth Failed",
        });
      },
    );
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Failed to Login",
      error: error,
    });
  }
});

export default router;
