import mongoose from "mongoose";

const fixtureSchema = mongoose.Schema({
  homeTeam: {
    _id: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  awayTeam: {
    _id: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  homeGoals: {
    type: Number,
    default: 0,
    min: 0,
  },
  awayGoals: {
    type: Number,
    default: 0,
    min: 0,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "in-progress"],
    default: "pending",
  },
  fixtureDate: {
    type: Date,
    required: true,
  },
});

export const Fixture = mongoose.model("Fixture", fixtureSchema);
