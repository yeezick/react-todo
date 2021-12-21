import { Route, Routes } from "react-router-dom";
import { useState } from "react";
// components
import Completed from "./screens/Completed";
import Home from "./screens/Home";
// utils
import "./App.css";
import Navbar from "./layout/navbar/Navbar";
import All from "./screens/All";

const dummyList = [
  {
    completed: false,
    date: "12/20/21",
    description: "filtering by labels would be a cool post mvp",
    id: Math.random() * 50,
    title: "labels",
  },
  {
    completed: true,
    date: "every day? pmvp?",
    description: "take out the trash",
    id: Math.random() * 50,
    title: "chores",
  },
  {
    completed: false,
    description: "git better",
    date: "today",
    id: Math.random() * 50,
    title: "coding",
  },
  {
    completed: false,
    date: "now mf",
    description: "finishTodo",
    id: Math.random() * 50,
    title: "addTodo",
  },
];

function App() {
  const [defaultList, setTodoList] = useState(dummyList);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home defaultList={defaultList} setTodoList={setTodoList} />}
        />
        <Route
          path="/all"
          element={<All defaultList={defaultList} setTodoList={setTodoList} />}
        />
        <Route
          path="/completed"
          element={
            <Completed defaultList={defaultList} setTodoList={setTodoList} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
