import { Statistics } from "../model/statistics.mjs";
import { Player } from "../model/player.mjs";
import { Team } from "../model/team.mjs";
import { successResponse, paginatedResponse } from "../utils/responseFormatter.mjs";
import { NotFoundError, BadRequestError } from "../utils/AppError.mjs";
import { getPaginationParams, getSortParams, getFilterParams } from "../utils/pagination.mjs";

export const getStatistics = async (req, res, next) => {
  try {
    const { page, limit, skip } = getPaginationParams(req);
    const sort = getSortParams(req, "-goals");
    const filter = getFilterParams(req, ["entityType", "season", "competition"]);

    const statistics = await Statistics.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Statistics.countDocuments(filter);

    paginatedResponse(res, statistics, { page, limit, total });
  } catch (error) {
    next(error);
  }
};

export const getStatisticsById = async (req, res, next) => {
  try {
    const statistics = await Statistics.findById(req.params.id);
    if (!statistics) {
      throw new NotFoundError("Statistics not found");
    }
    successResponse(res, statistics);
  } catch (error) {
    next(error);
  }
};

export const getEntityStatistics = async (req, res, next) => {
  try {
    const { entityType, entityId } = req.params;
    const { season, competition } = req.query;

    const filter = { entityType, entityId };
    if (season) filter.season = season;
    if (competition) filter.competition = competition;

    const statistics = await Statistics.find(filter);

    successResponse(res, statistics, "Statistics retrieved successfully");
  } catch (error) {
    next(error);
  }
};

export const createStatistics = async (req, res, next) => {
  try {
    const { entityType, entityId, season, competition } = req.body;

    if (entityType === "player") {
      const player = await Player.findById(entityId);
      if (!player) {
        throw new NotFoundError("Player not found");
      }
    } else if (entityType === "team") {
      const team = await Team.findById(entityId);
      if (!team) {
        throw new NotFoundError("Team not found");
      }
    }

    const existingStats = await Statistics.findOne({
      entityType,
      entityId,
      season,
      competition,
    });

    if (existingStats) {
      throw new BadRequestError("Statistics already exist for this entity in this season and competition");
    }

    const statistics = await Statistics.create(req.body);
    successResponse(res, statistics, "Statistics created successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const updateStatistics = async (req, res, next) => {
  try {
    const statistics = await Statistics.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!statistics) {
      throw new NotFoundError("Statistics not found");
    }

    successResponse(res, statistics, "Statistics updated successfully");
  } catch (error) {
    next(error);
  }
};

export const deleteStatistics = async (req, res, next) => {
  try {
    const statistics = await Statistics.findByIdAndDelete(req.params.id);
    if (!statistics) {
      throw new NotFoundError("Statistics not found");
    }
    successResponse(res, null, "Statistics deleted successfully");
  } catch (error) {
    next(error);
  }
};

export const getTopScorers = async (req, res, next) => {
  try {
    const { season, competition, limit = 10 } = req.query;

    const filter = { entityType: "player" };
    if (season) filter.season = season;
    if (competition) filter.competition = competition;

    const topScorers = await Statistics.find(filter)
      .sort({ goals: -1 })
      .limit(parseInt(limit))
      .populate("entityId", "firstName lastName team");

    successResponse(res, topScorers, "Top scorers retrieved successfully");
  } catch (error) {
    next(error);
  }
};

export const getTeamStandings = async (req, res, next) => {
  try {
    const { season, competition } = req.query;

    const filter = { entityType: "team" };
    if (season) filter.season = season;
    if (competition) filter.competition = competition;

    const standings = await Statistics.find(filter)
      .sort({ wins: -1, draws: -1, losses: 1 })
      .populate("entityId", "name coach");

    successResponse(res, standings, "Team standings retrieved successfully");
  } catch (error) {
    next(error);
  }
};
