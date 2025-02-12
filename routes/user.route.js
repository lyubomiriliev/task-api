import express from "express";
import {
  getMe,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/authMiddleware.js";

export const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", protect, getMe);
