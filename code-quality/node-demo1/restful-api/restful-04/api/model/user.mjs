import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "staff"], default: "staff" },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);
