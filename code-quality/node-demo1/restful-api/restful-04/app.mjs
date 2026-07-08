import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "mongo-sanitize";
import hpp from "hpp";
import { config } from "./api/config/env.config.mjs";
import {
  errorHandler,
  notFoundHandler,
} from "./api/middleware/errorHandler.mjs";

const app = express();

const corsOptions = {
  origin: config.cors.origin,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["X-Response-Time"],
  credentials: config.cors.credentials,
  maxAge: 600,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
    crossOriginEmbedderPolicy: false,
  }),
);

app.use(
  rateLimit({
    windowMs: config.rateLimit.windowMs,
    max: config.rateLimit.max,
    message: "Too many requests from this IP, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

app.use(mongoSanitize);

app.use(
  hpp({
    whitelist: ["page", "limit", "sort", "fields"],
  }),
);

app.get("/welcome", (request, response, next) => {
  response.status(200).json({
    message: "Welcome to The GYM Sports API",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/v1/auth", (await import("./api/routes/auth.routes.mjs")).default);
app.use("/api/v1/users", (await import("./api/routes/user.js")).default);
app.use(
  "/api/v1/teams",
  (await import("./api/routes/team.routes.mjs")).default,
);
app.use(
  "/api/v1/fixtures",
  (await import("./api/routes/fixture.routes.mjs")).default,
);
app.use(
  "/api/v1/players",
  (await import("./api/routes/player.routes.mjs")).default,
);
app.use(
  "/api/v1/venues",
  (await import("./api/routes/venue.routes.mjs")).default,
);
app.use(
  "/api/v1/statistics",
  (await import("./api/routes/statistics.routes.mjs")).default,
);
app.use(
  "/api/v1/seasons",
  (await import("./api/routes/season.routes.mjs")).default,
);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
