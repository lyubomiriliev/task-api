import React, { useState } from "react";
import { taskService } from "../services/TaskService";

const AddTask = ({ onTaskAdded }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    taskService
      .createTask({ name: taskName })
      .then(onTaskAdded)
      .catch(console.error);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
