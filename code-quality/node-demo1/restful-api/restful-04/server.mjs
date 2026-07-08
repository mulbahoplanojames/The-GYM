import http from "http";
import dotenv from "dotenv";
import app from "./app.mjs";
import mongoose from "mongoose";
import { config } from "./api/config/env.config.mjs";

dotenv.config();

const server = http.createServer(app);

mongoose
  .connect(config.database.connectionString)
  .then(() => {
    console.log("✅ Database connection successful");
    server.listen(config.port, () => {
      console.log(`🚀 Server is running on ${config.baseUrl}:${config.port}`);
      console.log(
        `📚 API Documentation: ${config.baseUrl}:${config.port}/api/v1`,
      );
    });
  })
  .catch((error) => {
    console.error("❌ Failed to connect to database:", error.message);
    process.exit(1);
  });

process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err);
  server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("✅ Server closed");
    mongoose.connection.close(false, () => {
      console.log("✅ Database connection closed");
      process.exit(0);
    });
  });
});
