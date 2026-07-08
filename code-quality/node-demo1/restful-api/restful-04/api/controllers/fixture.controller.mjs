import { Fixture } from "../model/fixture.mjs";
import { Team } from "../model/team.mjs";
import { successResponse, paginatedResponse } from "../utils/responseFormatter.mjs";
import { NotFoundError, BadRequestError } from "../utils/AppError.mjs";
import { getPaginationParams, getSortParams, getFilterParams } from "../utils/pagination.mjs";

export const getFixtures = async (req, res, next) => {
  try {
    const { page, limit, skip } = getPaginationParams(req);
    const sort = getSortParams(req, "fixtureDate");
    const filter = getFilterParams(req, ["status"]);

    const fixtures = await Fixture.find(filter)
      .populate("homeTeam", "name coach")
      .populate("awayTeam", "name coach")
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Fixture.countDocuments(filter);

    paginatedResponse(res, fixtures, { page, limit, total });
  } catch (error) {
    next(error);
  }
};

export const getFixtureById = async (req, res, next) => {
  try {
    const fixture = await Fixture.findById(req.params.id)
      .populate("homeTeam", "name coach")
      .populate("awayTeam", "name coach");

    if (!fixture) {
      throw new NotFoundError("Fixture not found");
    }

    successResponse(res, fixture);
  } catch (error) {
    next(error);
  }
};

export const createFixture = async (req, res, next) => {
  try {
    const { homeTeam, awayTeam } = req.body;

    const homeTeamExists = await Team.findById(homeTeam);
    const awayTeamExists = await Team.findById(awayTeam);

    if (!homeTeamExists) {
      throw new NotFoundError("Home team not found");
    }
    if (!awayTeamExists) {
      throw new NotFoundError("Away team not found");
    }

    const fixture = await Fixture.create(req.body);
    const populatedFixture = await Fixture.findById(fixture._id)
      .populate("homeTeam", "name coach")
      .populate("awayTeam", "name coach");

    successResponse(res, populatedFixture, "Fixture created successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const updateFixture = async (req, res, next) => {
  try {
    if (req.body.homeTeam) {
      const homeTeamExists = await Team.findById(req.body.homeTeam);
      if (!homeTeamExists) {
        throw new NotFoundError("Home team not found");
      }
    }

    if (req.body.awayTeam) {
      const awayTeamExists = await Team.findById(req.body.awayTeam);
      if (!awayTeamExists) {
        throw new NotFoundError("Away team not found");
      }
    }

    const fixture = await Fixture.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .populate("homeTeam", "name coach")
      .populate("awayTeam", "name coach");

    if (!fixture) {
      throw new NotFoundError("Fixture not found");
    }

    successResponse(res, fixture, "Fixture updated successfully");
  } catch (error) {
    next(error);
  }
};

export const deleteFixture = async (req, res, next) => {
  try {
    const fixture = await Fixture.findByIdAndDelete(req.params.id);
    if (!fixture) {
      throw new NotFoundError("Fixture not found");
    }
    successResponse(res, null, "Fixture deleted successfully");
  } catch (error) {
    next(error);
  }
};
