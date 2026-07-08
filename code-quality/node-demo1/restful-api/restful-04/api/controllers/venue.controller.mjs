import { Venue } from "../model/venue.mjs";
import { Team } from "../model/team.mjs";
import { successResponse, paginatedResponse } from "../utils/responseFormatter.mjs";
import { NotFoundError, BadRequestError } from "../utils/AppError.mjs";
import { getPaginationParams, getSortParams, getFilterParams } from "../utils/pagination.mjs";

export const getVenues = async (req, res, next) => {
  try {
    const { page, limit, skip } = getPaginationParams(req);
    const sort = getSortParams(req, "name");
    const filter = getFilterParams(req, ["city", "country", "isActive"]);

    const venues = await Venue.find(filter)
      .populate("homeTeams", "name")
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Venue.countDocuments(filter);

    paginatedResponse(res, venues, { page, limit, total });
  } catch (error) {
    next(error);
  }
};

export const getVenueById = async (req, res, next) => {
  try {
    const venue = await Venue.findById(req.params.id).populate("homeTeams", "name");
    if (!venue) {
      throw new NotFoundError("Venue not found");
    }
    successResponse(res, venue);
  } catch (error) {
    next(error);
  }
};

export const createVenue = async (req, res, next) => {
  try {
    const { homeTeams } = req.body;

    if (homeTeams && homeTeams.length > 0) {
      for (const teamId of homeTeams) {
        const teamExists = await Team.findById(teamId);
        if (!teamExists) {
          throw new NotFoundError(`Team with ID ${teamId} not found`);
        }
      }
    }

    const venue = await Venue.create(req.body);
    const populatedVenue = await Venue.findById(venue._id).populate("homeTeams", "name");

    successResponse(res, populatedVenue, "Venue created successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const updateVenue = async (req, res, next) => {
  try {
    const { homeTeams } = req.body;

    if (homeTeams && homeTeams.length > 0) {
      for (const teamId of homeTeams) {
        const teamExists = await Team.findById(teamId);
        if (!teamExists) {
          throw new NotFoundError(`Team with ID ${teamId} not found`);
        }
      }
    }

    const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("homeTeams", "name");

    if (!venue) {
      throw new NotFoundError("Venue not found");
    }

    successResponse(res, venue, "Venue updated successfully");
  } catch (error) {
    next(error);
  }
};

export const deleteVenue = async (req, res, next) => {
  try {
    const venue = await Venue.findByIdAndDelete(req.params.id);
    if (!venue) {
      throw new NotFoundError("Venue not found");
    }
    successResponse(res, null, "Venue deleted successfully");
  } catch (error) {
    next(error);
  }
};

export const addHomeTeam = async (req, res, next) => {
  try {
    const { teamId } = req.body;

    const venue = await Venue.findById(req.params.id);
    if (!venue) {
      throw new NotFoundError("Venue not found");
    }

    const team = await Team.findById(teamId);
    if (!team) {
      throw new NotFoundError("Team not found");
    }

    if (venue.homeTeams.includes(teamId)) {
      throw new BadRequestError("Team is already a home team at this venue");
    }

    venue.homeTeams.push(teamId);
    await venue.save();

    const updatedVenue = await Venue.findById(venue._id).populate("homeTeams", "name");

    successResponse(res, updatedVenue, "Home team added successfully");
  } catch (error) {
    next(error);
  }
};

export const removeHomeTeam = async (req, res, next) => {
  try {
    const { teamId } = req.params;

    const venue = await Venue.findById(req.params.id);
    if (!venue) {
      throw new NotFoundError("Venue not found");
    }

    venue.homeTeams = venue.homeTeams.filter((id) => id.toString() !== teamId);
    await venue.save();

    const updatedVenue = await Venue.findById(venue._id).populate("homeTeams", "name");

    successResponse(res, updatedVenue, "Home team removed successfully");
  } catch (error) {
    next(error);
  }
};
