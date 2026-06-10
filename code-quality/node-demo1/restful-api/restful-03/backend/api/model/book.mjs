import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  libarianId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  publishedDate: { type: Date, required: true },
  availableCopies: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Book = mongoose.model("Book", bookSchema);
