import { useState, useEffect } from "react";
// components
import Navbar from "./layout/navbar/Navbar";
import Sidebar from "./layout/sidebar/Sidebar";
import Todo from "./components/todo/Todo";
// utils
import "./App.css";
import "./layout/sidebar/Sidebar.css";

const dummyList = [
  {
    completed: false,
    date: new Date("2021-12-24"),
    description:
      "filtering by labels would be a cool post mvp, im adding more text to this todo so that it can be so long it has to scroll",
    id: `td${Math.random() * 50}`,
    title: "labels",
  },
  {
    completed: true,
    date: new Date("2021-11-28"),
    description: "take out the trash",
    id: `td${Math.random() * 50}`,
    title: "chores",
  },
  {
    completed: false,
    date: new Date("2021-11-29"),
    description: "git better",
    id: `td${Math.random() * 50}`,
    title: "coding",
  },
  {
    completed: false,
    date: new Date("2021-10-24"),
    description: "finishTodo",
    id: `td${Math.random() * 50}`,
    title: "addTodo",
  },
];

function App() {
  const [defaultList, setDefaultList] = useState(dummyList);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  useEffect(() => {
    const sortedList = defaultList.sort((a, b) =>
      new Date(a.date) < new Date(b.date) ? 1 : -1
    );
    setDefaultList(sortedList);
    localStorage.setItem("defaultList", JSON.stringify(sortedList));
  });

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

      <div>
        <Todo defaultList={defaultList} setDefaultList={setDefaultList} />
      </div>
    </div>
  );
}

export default App;
