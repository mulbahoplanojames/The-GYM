import { Season } from "../model/season.mjs";
import { Team } from "../model/team.mjs";
import { Fixture } from "../model/fixture.mjs";
import { successResponse, paginatedResponse } from "../utils/responseFormatter.mjs";
import { NotFoundError, BadRequestError } from "../utils/AppError.mjs";
import { getPaginationParams, getSortParams, getFilterParams } from "../utils/pagination.mjs";

export const getSeasons = async (req, res, next) => {
  try {
    const { page, limit, skip } = getPaginationParams(req);
    const sort = getSortParams(req, "-year");
    const filter = getFilterParams(req, ["competition", "competitionType", "isActive", "isCompleted"]);

    const seasons = await Season.find(filter)
      .populate("teams", "name coach")
      .populate("winner", "name coach")
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Season.countDocuments(filter);

    paginatedResponse(res, seasons, { page, limit, total });
  } catch (error) {
    next(error);
  }
};

export const getSeasonById = async (req, res, next) => {
  try {
    const season = await Season.findById(req.params.id)
      .populate("teams", "name coach")
      .populate("fixtures", "homeTeam awayTeam fixtureDate status")
      .populate("winner", "name coach");

    if (!season) {
      throw new NotFoundError("Season not found");
    }

    successResponse(res, season);
  } catch (error) {
    next(error);
  }
};

export const createSeason = async (req, res, next) => {
  try {
    const { teams, fixtures } = req.body;

    if (teams && teams.length > 0) {
      for (const teamId of teams) {
        const teamExists = await Team.findById(teamId);
        if (!teamExists) {
          throw new NotFoundError(`Team with ID ${teamId} not found`);
        }
      }
    }

    if (fixtures && fixtures.length > 0) {
      for (const fixtureId of fixtures) {
        const fixtureExists = await Fixture.findById(fixtureId);
        if (!fixtureExists) {
          throw new NotFoundError(`Fixture with ID ${fixtureId} not found`);
        }
      }
    }

    const season = await Season.create(req.body);
    const populatedSeason = await Season.findById(season._id)
      .populate("teams", "name coach")
      .populate("winner", "name coach");

    successResponse(res, populatedSeason, "Season created successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const updateSeason = async (req, res, next) => {
  try {
    const { teams, fixtures, winner } = req.body;

    if (teams && teams.length > 0) {
      for (const teamId of teams) {
        const teamExists = await Team.findById(teamId);
        if (!teamExists) {
          throw new NotFoundError(`Team with ID ${teamId} not found`);
        }
      }
    }

    if (fixtures && fixtures.length > 0) {
      for (const fixtureId of fixtures) {
        const fixtureExists = await Fixture.findById(fixtureId);
        if (!fixtureExists) {
          throw new NotFoundError(`Fixture with ID ${fixtureId} not found`);
        }
      }
    }

    if (winner) {
      const winnerExists = await Team.findById(winner);
      if (!winnerExists) {
        throw new NotFoundError("Winner team not found");
      }
    }

    const season = await Season.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .populate("teams", "name coach")
      .populate("winner", "name coach");

    if (!season) {
      throw new NotFoundError("Season not found");
    }

    successResponse(res, season, "Season updated successfully");
  } catch (error) {
    next(error);
  }
};

export const deleteSeason = async (req, res, next) => {
  try {
    const season = await Season.findByIdAndDelete(req.params.id);
    if (!season) {
      throw new NotFoundError("Season not found");
    }
    successResponse(res, null, "Season deleted successfully");
  } catch (error) {
    next(error);
  }
};

export const addTeamToSeason = async (req, res, next) => {
  try {
    const { teamId } = req.body;

    const season = await Season.findById(req.params.id);
    if (!season) {
      throw new NotFoundError("Season not found");
    }

    const team = await Team.findById(teamId);
    if (!team) {
      throw new NotFoundError("Team not found");
    }

    if (season.teams.includes(teamId)) {
      throw new BadRequestError("Team is already in this season");
    }

    season.teams.push(teamId);
    await season.save();

    const updatedSeason = await Season.findById(season._id).populate("teams", "name coach");

    successResponse(res, updatedSeason, "Team added to season successfully");
  } catch (error) {
    next(error);
  }
};

export const removeTeamFromSeason = async (req, res, next) => {
  try {
    const { teamId } = req.params;

    const season = await Season.findById(req.params.id);
    if (!season) {
      throw new NotFoundError("Season not found");
    }

    season.teams = season.teams.filter((id) => id.toString() !== teamId);
    await season.save();

    const updatedSeason = await Season.findById(season._id).populate("teams", "name coach");

    successResponse(res, updatedSeason, "Team removed from season successfully");
  } catch (error) {
    next(error);
  }
};

export const setSeasonWinner = async (req, res, next) => {
  try {
    const { winnerId } = req.body;

    const season = await Season.findById(req.params.id);
    if (!season) {
      throw new NotFoundError("Season not found");
    }

    const winner = await Team.findById(winnerId);
    if (!winner) {
      throw new NotFoundError("Winner team not found");
    }

    if (!season.teams.includes(winnerId)) {
      throw new BadRequestError("Winner team must be a participant in this season");
    }

    season.winner = winnerId;
    season.isCompleted = true;
    await season.save();

    const updatedSeason = await Season.findById(season._id)
      .populate("teams", "name coach")
      .populate("winner", "name coach");

    successResponse(res, updatedSeason, "Season winner set successfully");
  } catch (error) {
    next(error);
  }
};
