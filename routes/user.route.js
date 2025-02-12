import express from "express";
import {
  getMe,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", getMe);
