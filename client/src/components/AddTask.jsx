import React, { useState } from "react";
import { taskService } from "../services/TaskService";

const AddTask = ({ onTaskAdded }) => {
  const [taskName, setTaskName] = useState("");
  const [prio, setPrio] = useState("Low" | "Medium" | "High");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskName);
    console.log(prio);
    taskService
      .createTask({ name: taskName, priority: prio })
      .then(onTaskAdded)
      .catch(console.error);
    setTaskName("");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label>Select Priority</label>
      <select onChange={(e) => setPrio(e.target.value)} name="priority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
