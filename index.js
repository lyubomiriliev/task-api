import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import { router } from "./routes/task.route.js";
dotenv.config();

app.use(cors());
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// routes
app.use("/api/tasks", router);
