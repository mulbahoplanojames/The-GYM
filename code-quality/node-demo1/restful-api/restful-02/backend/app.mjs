import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import userRoutes from "./api/routes/user.mjs";
import taskRoutes from "./api/routes/tasks.mjs";

dotenv.config();

export const app = express();
app.use(morgan("dev"));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorizatio",
  );

  if (request.method === "OPTIONS") {
    response.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE",
    );

    response.status(200).send({});
  }

  next();
});

app.use("/user", userRoutes);
app.use("/tasks", taskRoutes);

app.use((request, response, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.send({
    error: {
      message: error.message,
    },
  });
});
