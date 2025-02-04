const Task = ({ task }) => {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>{task.priority}</p>
      <p>{task.progress}</p>
    </div>
  );
};

export default Task;
