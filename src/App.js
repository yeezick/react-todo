import { Route, Routes } from "react-router-dom";
import { useState } from "react";
// components
import Completed from "./screens/Completed";
import Home from "./screens/Home";
// utils
import "./App.css";
import Navbar from "./layout/navbar/Navbar";

const defaultList = [
  {
    title: "title",
    description: "description",
    date: "date",
    completed: false,
  },
  {
    title: "title",
    description: "description",
    date: "date",
    completed: false,
  },
  {
    title: "title",
    description: "description",
    date: "date",
    completed: false,
  },
];

function App() {
  const [todoList, setTodoList] = useState(defaultList);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home todoList={todoList} setTodoList={setTodoList} />}
        />
        <Route
          path="/completed"
          element={<Completed todoList={todoList} setTodoList={setTodoList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
