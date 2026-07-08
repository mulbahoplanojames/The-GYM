import mongoose from "mongoose";

const fixtureSchema = mongoose.Schema({
  homeTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  awayTeam: {
    type: mongoose.Schema.Types.ObjectId,
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
    enum: ["pending", "completed", "in-progress", "postponed", "cancelled"],
    default: "pending",
  },
  fixtureDate: {
    type: Date,
    required: true,
  },
  venue: {
    type: String,
    trim: true,
  },
  homeScorers: [
    {
      player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
      minute: {
        type: Number,
        min: 0,
        max: 120,
      },
      ownGoal: {
        type: Boolean,
        default: false,
      },
    },
  ],
  awayScorers: [
    {
      player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      },
      minute: {
        type: Number,
        min: 0,
        max: 120,
      },
      ownGoal: {
        type: Boolean,
        default: false,
      },
    },
  ],
  homeAssists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  awayAssists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  referee: {
    type: String,
    trim: true,
  },
  attendance: {
    type: Number,
    min: 0,
  },
});

fixtureSchema.index({ homeTeam: 1, awayTeam: 1 });
fixtureSchema.index({ fixtureDate: 1 });
fixtureSchema.index({ status: 1 });
fixtureSchema.index({ "homeScorers.player": 1 });
fixtureSchema.index({ "awayScorers.player": 1 });

export const Fixture = mongoose.model("Fixture", fixtureSchema);
