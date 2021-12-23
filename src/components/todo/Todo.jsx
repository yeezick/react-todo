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

  const handleFakeRadio = () => {
    const allTodos = defaultList.filter((item) => item.id !== id);
    const updatedTodo = { ...currentTodo, completed: !currentTodo.completed };
    setDefaultList([...allTodos, updatedTodo]);
  };

  return (
    <div className="todo_item" onClick={handleFakeRadio}>
      <div className="todo_item_checkbox_wrapper'">
        <div
          className={`todo_item_edit_input ${
            editTodo ? "active-edit_input" : "inactive-edit_input"
          }`}
        >
          <textarea value={currentTodo.description} onChange={handleEdit} />
          <button onClick={updateDefaultList}>+</button>
        </div>
      </div>
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
    <div className="todo_list_parent">
      {currentList.map((item, idx) => (
        <TodoItem
          key={`todo-${idx}`}
          currentList={currentList}
          item={item}
          setDefaultList={setDefaultList}
          defaultList={defaultList}
        />
      ))}
    </div>
  );
};
export default Todo;
