import mongoose from "mongoose";

const seasonSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: [true, "Season name is required"],
      trim: true,
    },
    year: {
      type: String,
      required: [true, "Year is required"],
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
      required: [true, "End date is required"],
    },
    competition: {
      type: String,
      required: [true, "Competition is required"],
      trim: true,
    },
    competitionType: {
      type: String,
      enum: ["league", "cup", "tournament", "friendly"],
      default: "league",
    },
    teams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
    fixtures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fixture",
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    winner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

seasonSchema.index({ name: 1, year: 1 }, { unique: true });
seasonSchema.index({ year: 1 });
seasonSchema.index({ competition: 1 });
seasonSchema.index({ teams: 1 });
seasonSchema.index({ isActive: 1 });

seasonSchema.pre("save", function (next) {
  if (this.startDate && this.endDate && this.startDate >= this.endDate) {
    next(new Error("End date must be after start date"));
  } else {
    next();
  }
});

export const Season = mongoose.model("Season", seasonSchema);
