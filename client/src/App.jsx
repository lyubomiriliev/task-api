import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import "../styles/app.scss";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="to-do-heading">To-Do App</h1>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
