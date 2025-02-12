import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getMyTasks,
  getTaskById,
  updateTask,
} from "../controllers/task.controller.js";
import { protect } from "../middleware/authMiddleware.js";

export const taskRouter = express.Router();

taskRouter.get("/", getAllTasks);
taskRouter.get("/private", protect, getMyTasks);
taskRouter.get("/:id", getTaskById);
taskRouter.post("/", protect, createTask);
taskRouter.put("/:id", protect, updateTask);
taskRouter.delete("/:id", protect, deleteTask);
