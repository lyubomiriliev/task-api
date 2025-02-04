import React, { useState } from "react";
import { taskService } from "../services/TaskService";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/add-task.scss";

const AddTask = ({ onTaskAdded }) => {
  const [taskName, setTaskName] = useState("");
  const [prio, setPrio] = useState("Low" | "Medium" | "High");
  const navigate = useNavigate();

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
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label>Task Name</label>
        <input
          className="task-name"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <label>Select Priority</label>
        <select
          className="task-priority"
          onChange={(e) => setPrio(e.target.value)}
          name="priority"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button className="add-btn" type="submit">
          Add Task
        </button>
      </form>
      <Link to="/">
        <button className="back-btn">Back to tasks</button>
      </Link>
    </div>
  );
};

export default AddTask;
