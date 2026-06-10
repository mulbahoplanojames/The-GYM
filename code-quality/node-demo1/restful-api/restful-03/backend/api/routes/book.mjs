import mongoose from "mongoose";
import { Book } from "../model/book.mjs";
import express from "express";
const router = express.Router();

router.post("/add-book", async (request, response, next) => {
  try {
    const { libarianId, title, author, category, availableCopies } =
      request.body;

    const existingBook = await Book.findOne({ title, author });

    if (existingBook) {
      return response.status(400).json({
        message: "Book already exists",
      });
    }

    const newBook = new Book({
      _id: new mongoose.Types.ObjectId(),
      libarianId,
      title,
      author,
      category,
      availableCopies,
    });

    await newBook
      .save()
      .then((result) => {
        response.status(201).json({
          message: "Book created successfully",
          book: newBook,
        });
      })
      .catch((error) => {
        response.status(500).json({
          message: "Failed to create book",
          error: error.message,
        });
      });
  } catch (error) {
    response.status(500).json({
      message: "Failed to create book",
      error: error.message,
    });
  }
});

export default router;
