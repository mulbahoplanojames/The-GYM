import mongoose from "mongoose";

const borrowRecordSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  borrowDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "borrowed", "returned", "rejected"],
    default: "pending",
  },
  returnDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const BorrowRecord = mongoose.model("BorrowRecord", borrowRecordSchema);
