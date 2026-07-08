import { config } from "../config/env.config.mjs";

export const getPaginationParams = (req) => {
  const page = parseInt(req.query.page) || 1;
  const limit = Math.min(
    parseInt(req.query.limit) || config.pagination.defaultLimit,
    config.pagination.maxLimit
  );
  const skip = (page - 1) * limit;
  
  return { page, limit, skip };
};

export const getSortParams = (req, defaultSort = "-createdAt") => {
  const sort = req.query.sort || defaultSort;
  const sortObj = {};
  
  sort.split(",").forEach((field) => {
    const direction = field.startsWith("-") ? -1 : 1;
    const fieldName = field.replace(/^-/, "");
    sortObj[fieldName] = direction;
  });
  
  return sortObj;
};

export const getFilterParams = (req, allowedFields = []) => {
  const filter = {};
  
  allowedFields.forEach((field) => {
    if (req.query[field]) {
      filter[field] = req.query[field];
    }
  });
  
  return filter;
};
