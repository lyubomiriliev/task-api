import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please enter task name"],
    },

    priority: {
      type: String,
      required: true,
      default: "Medium",
    },

    progress: {
      type: String,
      required: true,
      default: "To Do",
    },
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model("Task", TaskSchema);
