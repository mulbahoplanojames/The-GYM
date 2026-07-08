import mongoose from "mongoose";

const playerSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    nationality: {
      type: String,
      required: [true, "Nationality is required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Position is required"],
      enum: [
        "goalkeeper",
        "defender",
        "midfielder",
        "forward",
        "striker",
        "winger",
      ],
    },
    jerseyNumber: {
      type: Number,
      required: [true, "Jersey number is required"],
      min: 1,
      max: 99,
    },
    height: {
      type: Number,
      min: 100,
      max: 250,
    },
    weight: {
      type: Number,
      min: 30,
      max: 150,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "Team is required"],
    },
    stats: {
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
      appearances: {
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
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    contractStart: {
      type: Date,
    },
    contractEnd: {
      type: Date,
    },
    marketValue: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

playerSchema.index({ team: 1 });
playerSchema.index({ position: 1 });
playerSchema.index({ "stats.goals": -1 });
playerSchema.index({ firstName: 1, lastName: 1 });
playerSchema.index({ jerseyNumber: 1, team: 1 }, { unique: true });

playerSchema.virtual("age").get(function () {
  const today = new Date();
  const birthDate = new Date(this.dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
});

playerSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

playerSchema.set("toJSON", { virtuals: true });
playerSchema.set("toObject", { virtuals: true });

export const Player = mongoose.model("Player", playerSchema);
