//! todoItem is rendering twice! look into why this is happening
import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";

import "./Todo.css";

const TodoItem = ({ item, defaultList, setDefaultList }) => {
  const [currentTodo, setCurrentTodo] = useState({});
  const { date, description, id, title } = item;
  useEffect(() => {
    const findTodo = defaultList.filter((item) => item.id === id);
    setCurrentTodo(...findTodo);
  }, [defaultList, item]); // why did adding item to this dependency solve so many bugs?

  const handleCompletion = (e) => {
    const { checked } = e.target;
    const allTodos = defaultList.filter((item) => item.id !== id);
    const updatedTodo = { ...currentTodo, completed: checked };
    setDefaultList([...allTodos, updatedTodo]);
  };

  return (
    <div className="todo_item">
      <p className="todo_item_title">{title}</p>
      <p className="todo_item_desc">{description}</p>
      <p className="todo_item_date">{date}</p>
      <input
        className="todo_item_checkbox"
        type="checkbox"
        checked={currentTodo?.completed ? true : false}
        onChange={(e) => handleCompletion(e)}
      />
    </div>
  );
};

const Todo = ({ defaultList, setDefaultList, name }) => {
  return (
    <>
      <TodoList
        defaultList={defaultList}
        setDefaultList={setDefaultList}
        name={name}
      />
      <AddTodo setDefaultList={setDefaultList} />
    </>
  );
};

// most likely can consolidate this component to be flexible enough to be used for both lists

// this component is responsible for rendering the appropriate list depending on which list the user is trying to access
// - should i pass down the label of the list as a prop?
// start by renaming the parent list to defaultList
// then use `selectedList` in this component to choose the appropriate list
// how would i handle the user creating their own lists?
const TodoList = ({ defaultList, setDefaultList, name }) => {
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    switch (name) {
      case "completed":
        const completedList = defaultList.filter(
          (item) => item.completed === true
        );
        setCurrentList(completedList);
        break;
      case "incomplete":
        const incompleteItems = defaultList.filter(
          (item) => item.completed === false
        );
        setCurrentList(incompleteItems);
        break;
      default:
      case "all":
        setCurrentList(defaultList);
        break;
    }
  }, [defaultList, name]);
  return (
    <>
      {currentList.map((item, idx) => (
        <TodoItem
          key={`todo-${idx}`}
          currentList={currentList}
          item={item}
          setDefaultList={setDefaultList}
          defaultList={defaultList}
        />
      ))}
    </>
  );
};
export default Todo;
