import mongoose from "mongoose";

const venueSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: [true, "Venue name is required"],
      trim: true,
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },
    capacity: {
      type: Number,
      required: [true, "Capacity is required"],
      min: 1,
    },
    address: {
      type: String,
      trim: true,
    },
    surface: {
      type: String,
      enum: ["grass", "artificial", "hybrid"],
      default: "grass",
    },
    openedYear: {
      type: Number,
      min: 1800,
      max: new Date().getFullYear(),
    },
    homeTeams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
    ],
    facilities: [
      {
        type: String,
        trim: true,
      },
    ],
    hasParking: {
      type: Boolean,
      default: true,
    },
    hasLights: {
      type: Boolean,
      default: true,
    },
    hasRoof: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

venueSchema.index({ name: 1, city: 1 });
venueSchema.index({ city: 1 });
venueSchema.index({ country: 1 });
venueSchema.index({ capacity: -1 });
venueSchema.index({ homeTeams: 1 });

export const Venue = mongoose.model("Venue", venueSchema);
