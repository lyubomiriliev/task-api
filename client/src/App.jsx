import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";

function App() {
  return (
    <Router>
      <div>
        <h1>To-Do App</h1>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
