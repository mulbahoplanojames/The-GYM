import mongoose from "mongoose";

const teamSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: [true, "Team name is required"],
      unique: true,
      trim: true,
    },
    coach: {
      type: {
        name: {
          type: String,
          required: [true, "Coach name is required"],
          trim: true,
        },
        age: {
          type: Number,
          min: 18,
          max: 100,
          required: [true, "Coach age is required"],
        },
        nationality: {
          type: String,
          required: [true, "Coach nationality is required"],
          trim: true,
        },
      },
      required: [true, "Coach is required"],
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
    players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
    ],
    foundedYear: {
      type: Number,
      min: 1800,
      max: new Date().getFullYear(),
    },
    stadium: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

teamSchema.index({ name: 1 });
teamSchema.index({ points: -1 });
teamSchema.index({ "coach.name": 1 });
teamSchema.index({ players: 1 });

export const Team = mongoose.model("Team", teamSchema);
