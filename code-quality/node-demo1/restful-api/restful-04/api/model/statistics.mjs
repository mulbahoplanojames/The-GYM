import mongoose from "mongoose";

const statisticsSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    entityType: {
      type: String,
      enum: ["player", "team"],
      required: [true, "Entity type is required"],
    },
    entityId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Entity ID is required"],
    },
    season: {
      type: String,
      required: [true, "Season is required"],
    },
    competition: {
      type: String,
      required: [true, "Competition is required"],
    },
    matchesPlayed: {
      type: Number,
      default: 0,
      min: 0,
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
    goals: {
      type: Number,
      default: 0,
      min: 0,
    },
    assists: {
      type: Number,
      default: 0,
      min: 0,
    },
    cleanSheets: {
      type: Number,
      default: 0,
      min: 0,
    },
    yellowCards: {
      type: Number,
      default: 0,
      min: 0,
    },
    redCards: {
      type: Number,
      default: 0,
      min: 0,
    },
    minutesPlayed: {
      type: Number,
      default: 0,
      min: 0,
    },
    goalsConceded: {
      type: Number,
      default: 0,
      min: 0,
    },
    shots: {
      type: Number,
      default: 0,
      min: 0,
    },
    shotsOnTarget: {
      type: Number,
      default: 0,
      min: 0,
    },
    passes: {
      type: Number,
      default: 0,
      min: 0,
    },
    passAccuracy: {
      type: Number,
      min: 0,
      max: 100,
    },
    tackles: {
      type: Number,
      default: 0,
      min: 0,
    },
    interceptions: {
      type: Number,
      default: 0,
      min: 0,
    },
    duelsWon: {
      type: Number,
      default: 0,
      min: 0,
    },
    aerialsWon: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

statisticsSchema.index({ entityType: 1, entityId: 1, season: 1, competition: 1 }, { unique: true });
statisticsSchema.index({ entityType: 1, season: 1 });
statisticsSchema.index({ goals: -1 });
statisticsSchema.index({ assists: -1 });

export const Statistics = mongoose.model("Statistics", statisticsSchema);
