import { Player } from "../model/player.mjs";
import { Team } from "../model/team.mjs";
import { successResponse, paginatedResponse } from "../utils/responseFormatter.mjs";
import { NotFoundError, BadRequestError } from "../utils/AppError.mjs";
import { getPaginationParams, getSortParams, getFilterParams } from "../utils/pagination.mjs";

export const getPlayers = async (req, res, next) => {
  try {
    const { page, limit, skip } = getPaginationParams(req);
    const sort = getSortParams(req, "lastName");
    const filter = getFilterParams(req, ["team", "position", "isActive"]);

    const players = await Player.find(filter)
      .populate("team", "name coach")
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Player.countDocuments(filter);

    paginatedResponse(res, players, { page, limit, total });
  } catch (error) {
    next(error);
  }
};

export const getPlayerById = async (req, res, next) => {
  try {
    const player = await Player.findById(req.params.id).populate("team", "name coach");
    if (!player) {
      throw new NotFoundError("Player not found");
    }
    successResponse(res, player);
  } catch (error) {
    next(error);
  }
};

export const createPlayer = async (req, res, next) => {
  try {
    const { team, jerseyNumber } = req.body;

    const teamExists = await Team.findById(team);
    if (!teamExists) {
      throw new NotFoundError("Team not found");
    }

    const existingPlayer = await Player.findOne({ team, jerseyNumber });
    if (existingPlayer) {
      throw new BadRequestError("Jersey number already taken in this team");
    }

    const player = await Player.create(req.body);
    const populatedPlayer = await Player.findById(player._id).populate("team", "name coach");

    successResponse(res, populatedPlayer, "Player created successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const updatePlayer = async (req, res, next) => {
  try {
    const { team, jerseyNumber } = req.body;

    if (team) {
      const teamExists = await Team.findById(team);
      if (!teamExists) {
        throw new NotFoundError("Team not found");
      }
    }

    if (team && jerseyNumber) {
      const existingPlayer = await Player.findOne({
        team,
        jerseyNumber,
        _id: { $ne: req.params.id },
      });
      if (existingPlayer) {
        throw new BadRequestError("Jersey number already taken in this team");
      }
    }

    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("team", "name coach");

    if (!player) {
      throw new NotFoundError("Player not found");
    }

    successResponse(res, player, "Player updated successfully");
  } catch (error) {
    next(error);
  }
};

export const deletePlayer = async (req, res, next) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (!player) {
      throw new NotFoundError("Player not found");
    }
    successResponse(res, null, "Player deleted successfully");
  } catch (error) {
    next(error);
  }
};

export const getPlayerStats = async (req, res, next) => {
  try {
    const player = await Player.findById(req.params.id).select("stats");
    if (!player) {
      throw new NotFoundError("Player not found");
    }
    successResponse(res, player.stats, "Player stats retrieved successfully");
  } catch (error) {
    next(error);
  }
};

export const updatePlayerStats = async (req, res, next) => {
  try {
    const player = await Player.findByIdAndUpdate(
      req.params.id,
      { $set: { stats: req.body } },
      { new: true, runValidators: true }
    ).populate("team", "name coach");

    if (!player) {
      throw new NotFoundError("Player not found");
    }

    successResponse(res, player, "Player stats updated successfully");
  } catch (error) {
    next(error);
  }
};
