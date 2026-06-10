import http from "http";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import app from "./app.mjs";

dotenv.config();

app.use(morgan("dev"));

const port = process.env.PORT;

const server = http.createServer(app);

const connectionString = process.env.MONGODB_CONNECTION_STRING;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connection successful");
    server.listen(port, () => {
      console.log(`Server is listening on port localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect to database");
    console.log("Error", error);
  });
