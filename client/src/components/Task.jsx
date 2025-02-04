import "../../styles/task.scss";
import { taskService } from "../services/TaskService";
import { MdTask } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { GiProgression } from "react-icons/gi";

const Task = ({ task }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "High":
        return <FcHighPriority className="priority-icon" />;
      case "Medium":
        return <FcMediumPriority className="priority-icon" />;
      case "Low":
        return <FcLowPriority className="priority-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="task-container">
      <div className="task-name-div">
        <MdTask className="icon" />
        <h3 className="task-name">{task.name}</h3>
      </div>
      <div className="priority-div">
        {getPriorityIcon(task.priority)}
        <p className="task-priority">Priority: {task.priority}</p>
      </div>
      <div className="progress-div">
        <GiProgression />
        <p className="task-progress">Progress: {task.progress}</p>
      </div>
      <button
        onClick={() => taskService.deleteTask(task._id)}
        className="finish-btn"
      >
        Mark as done
      </button>
    </div>
  );
};

export default Task;
