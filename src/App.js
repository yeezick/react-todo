import { useState } from "react";
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

      <div>
        <Todo
          defaultList={defaultList}
          setDefaultList={setDefaultList}
          name="Incomplete"
        />
      </div>
    </div>
  );
}

export default App;
