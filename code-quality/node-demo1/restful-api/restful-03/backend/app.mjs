import express from "express";
import authRouter from "./api/routes/auth.mjs";
import bookRouter from "./api/routes/book.mjs";
import userRouter from "./api/routes/users.mjs";

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/books", bookRouter);
app.use("/api/v1/users", userRouter);

app.use((request, response, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({
    error: {
      message: error.message,
    },
  });
});

export default app;
