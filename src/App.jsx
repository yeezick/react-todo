import { useState } from "react";
// components
import { Navbar } from "./layout/navbar/Navbar";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Todo } from "./components/todo/Todo.jsx";
// utils
import "./App.css";
import "./layout/sidebar/Sidebar.css";

function App() {
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
        <Todo />
      </div>
    </div>
  );
}

export default App;
