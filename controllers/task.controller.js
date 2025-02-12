import { Task } from "../models/task.model.js";
import { User } from "../models/user.model.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      name: req.body.name,
      priority: req.body.priority,
      progress: req.body.progress,
      user: req.user.id,
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Error creating task", error: err });
  }
};

export const updateTask = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const task = await Task.findById(req.params.id);

    // Check for user
    if (!user) {
      res.status(401).json({ message: "User not found" });
    }

    // Make sure only the creator can edit his task
    if (task.user.toString() !== user.id) {
      res.status(401).json({ message: "User not authorized" });
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const task = await Task.findById(req.params.id);

    if (!user) {
      res.status(401).json({ message: "User not found" });
    }

    if (task.user.toString() !== user.id) {
      res.status(401).json({ message: "User not authorized" });
    }

    const taskToDelete = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res
      .status(200)
      .json({ id: req.params.id, message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
