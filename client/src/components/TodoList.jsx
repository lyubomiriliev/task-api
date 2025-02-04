import React, { useEffect, useState } from "react";
import { taskService } from "../services/TaskService";
import Task from "./Task";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService
      .getAllTasks()
      .then(setTasks)
      .catch((error) => console.error("Error fetching tasks", error));
  }, [tasks]);

  return (
    <div>
      <h2>My to-do list</h2>
      <div>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
