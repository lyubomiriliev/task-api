import React, { useEffect, useState } from "react";
import { taskService } from "../services/TaskService";
import Task from "./Task";
import "../../styles/todolist.scss";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService
      .getAllTasks()
      .then(setTasks)
      .catch((error) => console.error("Error fetching tasks", error));
  }, [tasks]);

  return (
    <div className="list-container">
      <div className="list-title">
        <h2 className="list-heading">My tasks</h2>
        <Link className="new-task" to="/add">
          <button className="task-btn">Create new task</button>
        </Link>
      </div>
      <div className="tasks-list">
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
