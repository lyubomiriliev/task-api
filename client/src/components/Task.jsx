import "../../styles/task.scss";

const Task = ({ task }) => {
  return (
    <div className="task-container">
      <h3 className="task-name">Title: {task.name}</h3>
      <div>
        <p className="task-priority">Priority: {task.priority}</p>
        <p className="task-progress">Progress: {task.progress}</p>
      </div>
      <button className="finish-btn">Finish task</button>
    </div>
  );
};

export default Task;
