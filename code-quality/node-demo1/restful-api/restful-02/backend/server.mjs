import http from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { app } from "./app.mjs";

const port = process.env.PORT || 3000;
const databaseUrl = process.env.DATABASE_URL;

const server = http.createServer(app);

mongoose
  .connect(databaseUrl)
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(port, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB");
    console.log(error);
  });
