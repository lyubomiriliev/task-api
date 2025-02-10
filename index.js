import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import { taskRouter } from "./routes/task.route.js";
import { userRouter } from "./routes/user.route.js";
dotenv.config();

app.use(cors());
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);
console.log("User routes registered");

app.get("/test", (req, res) => {
  res.send("API is working!");
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
