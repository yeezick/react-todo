import { Route, Routes } from "react-router-dom";
import { useState } from "react";
// components
import Completed from "./screens/Completed";
import Home from "./screens/Home";
// utils
import "./App.css";
import "./layout/sidebar/Sidebar.css";
import Navbar from "./layout/navbar/Navbar";
import All from "./screens/All";
import Sidebar from "./layout/sidebar/Sidebar";

const dummyList = [
  {
    completed: false,
    date: "12/20/21",
    description:
      "filtering by labels would be a cool post mvp, im adding more text to this todo so that it can be so long it has to scroll",
    id: `td${Math.random() * 50}`,
    title: "labels",
  },
  {
    completed: true,
    date: "every day? pmvp?",
    description: "take out the trash",
    id: `td${Math.random() * 50}`,
    title: "chores",
  },
  {
    completed: false,
    date: "today",
    description: "git better",
    id: `td${Math.random() * 50}`,
    title: "coding",
  },
  {
    completed: false,
    date: "now mf",
    description: "finishTodo",
    id: `td${Math.random() * 50}`,
    title: "addTodo",
  },
];
function App() {
  const [defaultList, setDefaultList] = useState(dummyList);
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  return (
    <div className="App">
      <Sidebar
        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar}
      />
      <Navbar
        visibleSidebar={visibleSidebar}
        setVisibleSidebar={setVisibleSidebar}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home defaultList={defaultList} setDefaultList={setDefaultList} />
          }
        />
        <Route
          path="/all"
          element={
            <All defaultList={defaultList} setDefaultList={setDefaultList} />
          }
        />
        <Route
          path="/completed"
          element={
            <Completed
              defaultList={defaultList}
              setDefaultList={setDefaultList}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
