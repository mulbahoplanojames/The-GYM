import http from "http";
import dotenv from "dotenv";
import app from "./app.mjs";
import mongoose from "mongoose";
dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT;
const databaseConnectionString = process.env.DATABASE_CONNECTION_STRING;
const baseUrl = process.env.BASE_URL;

mongoose
  .connect(databaseConnectionString)
  .then(() => {
    console.log("Database connection successful");
    server.listen(port, () => {
      console.log(`Server is running on port ${baseUrl}:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to databse", error);
  });
