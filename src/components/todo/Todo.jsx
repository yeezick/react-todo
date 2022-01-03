//! todoItem is rendering twice! look into why this is happening
//! filtering for all other todos 3x in this component alone, opportunity to DRY up that logic

import { useState, useEffect } from "react";
import { AddTodo } from "./blocks/AddTodo";
import { TodoList } from "./blocks/TodoList";

import "./Todo.css";

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

export const Todo = () => {
  const [name, setName] = useState("All");
  const [refresh, toggleRefresh] = useState(false);
  const [defaultList, setDefaultList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("defaultList")) {
      localStorage.setItem("defaultList", JSON.stringify(dummyList));
      setDefaultList(dummyList);
    } else {
      setDefaultList(JSON.parse(localStorage.getItem("defaultList")));
    }
  }, [refresh]);

  return (
    <>
      <div className="app_welcome">
        <Filter setName={setName} />
        <p className="todo_title">{name}</p>
      </div>
      <AddTodo
        defaultList={defaultList}
        setDefaultList={setDefaultList}
        toggleRefresh={toggleRefresh}
      />
      <TodoList
        defaultList={defaultList}
        toggleRefresh={toggleRefresh}
        refresh={refresh}
        name={name}
      />
    </>
  );
};

const Filter = ({ setName }) => {
  const handleName = (e) => {
    setName(e.target.textContent);
  };
  return (
    <div className="todo_filter">
      <button onClick={handleName}>All</button>
      <button onClick={handleName}>Completed</button>
      <button onClick={handleName}>Incomplete</button>
    </div>
  );
};
