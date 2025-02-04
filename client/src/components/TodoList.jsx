import React, { useEffect, useState } from "react";
import { taskService } from "../services/TaskService";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService
      .getAllTasks()
      .then(setTasks)
      .catch((error) => console.error("Error fetching tasks", error));
  }, []);

  return (
    <div>
      <h2>My to-do list</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.name} - {task.progress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
