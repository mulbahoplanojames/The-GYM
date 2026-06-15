import mongoose from "mongoose";

const teamSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      require: [true, "Team name is require"],
      unique: true,
      trim: true,
    },
    coach: {
      type: {
        name: {
          type: String,
          required: [true, "Coach name is require"],
          trim: true,
        },
        age: {
          type: Number,
          min: 18,
          max: 100,
          required: [true, "Coach age is require"],
        },
        nationality: {
          type: String,
          required: [true, "Coach nationality is require"],
          trim: true,
        },
      },
      required: [true, "Coach is require"],
    },
    wins: {
      type: Number,
      default: 0,
      min: 0,
    },
    draws: {
      type: Number,
      default: 0,
      min: 0,
    },
    losses: {
      type: Number,
      default: 0,
      min: 0,
    },
    points: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const Team = mongoose.model("Team", teamSchema);
