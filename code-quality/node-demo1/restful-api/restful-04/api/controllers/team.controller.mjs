import { Team } from "../model/team.mjs";
import { successResponse, paginatedResponse } from "../utils/responseFormatter.mjs";
import { NotFoundError, BadRequestError } from "../utils/AppError.mjs";
import { getPaginationParams, getSortParams } from "../utils/pagination.mjs";

export const getTeams = async (req, res, next) => {
  try {
    const { page, limit, skip } = getPaginationParams(req);
    const sort = getSortParams(req, "-points");

    const teams = await Team.find()
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Team.countDocuments();

    paginatedResponse(res, teams, { page, limit, total });
  } catch (error) {
    next(error);
  }
};

export const getTeamById = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      throw new NotFoundError("Team not found");
    }
    successResponse(res, team);
  } catch (error) {
    next(error);
  }
};

export const createTeam = async (req, res, next) => {
  try {
    const existingTeam = await Team.findOne({ name: req.body.name });
    if (existingTeam) {
      throw new BadRequestError("Team with this name already exists");
    }

    const team = await Team.create(req.body);
    successResponse(res, team, "Team created successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const updateTeam = async (req, res, next) => {
  try {
    if (req.body.name) {
      const existingTeam = await Team.findOne({
        name: req.body.name,
        _id: { $ne: req.params.id },
      });
      if (existingTeam) {
        throw new BadRequestError("Team name already in use");
      }
    }

    const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!team) {
      throw new NotFoundError("Team not found");
    }

    successResponse(res, team, "Team updated successfully");
  } catch (error) {
    next(error);
  }
};

export const deleteTeam = async (req, res, next) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) {
      throw new NotFoundError("Team not found");
    }
    successResponse(res, null, "Team deleted successfully");
  } catch (error) {
    next(error);
  }
};
