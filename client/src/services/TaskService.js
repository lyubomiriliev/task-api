import axios from "axios";

class TaskService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000/api/tasks",
    });
  }

  getAllTasks() {
    return this.api.get("/").then((res) => res.data);
  }

  getTaskById(id) {
    return this.api.get(`/${id}`).then((res) => res.data);
  }

  createTask(task) {
    return this.api.post("/", task).then((res) => res.data);
  }

  updateTask(id, updatedTask) {
    return this.api.put(`/${id}`, updatedTask).then((res) => res.data);
  }

  deleteTask(id) {
    return this.api.delete(`/${id}`).then((res) => res.data);
  }
}

export const taskService = new TaskService();
