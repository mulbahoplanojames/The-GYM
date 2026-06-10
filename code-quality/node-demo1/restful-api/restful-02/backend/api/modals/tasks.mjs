import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  priority: {
    type: String,
    enum: ["high", "mediam", "Low"],
    require: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "in-progress"],
    default: "pending",
  },
  deadline: {
    type: Date,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

taskSchema.index({ userId: 1, title: 1 }, { unique: true });

export const Tasks = mongoose.model("Tasks", taskSchema);
