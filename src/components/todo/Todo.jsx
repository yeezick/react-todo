//! todoItem is rendering twice! look into why this is happening
//! filtering for all other todos 3x in this component alone, opportunity to DRY up that logic

import { useState, useEffect } from "react";
import AddTodo from "./blocks/AddTodo";
import TodoItemContent from "./blocks/TodoItemContent";

import "./Todo.css";

const TodoItem = ({ item, defaultList, setDefaultList }) => {
  const [currentTodo, setCurrentTodo] = useState({});
  const [settingsPopup, setSettingsPopup] = useState(false);
  const [editTodo, setEditTodo] = useState(false);
  const { description, id } = item;

  useEffect(() => {
    const findTodo = defaultList.filter((item) => item.id === id);
    setCurrentTodo(...findTodo);
  }, [defaultList, item]); // why did adding item to this dependency solve so many bugs?

  const handleCompletion = () => {
    const allTodos = defaultList.filter((item) => item.id !== id);
    const updatedTodo = { ...currentTodo, completed: !currentTodo.completed };
    setDefaultList([...allTodos, updatedTodo]);
  };

  const handleEdit = (e) => {
    setCurrentTodo((prevState) => {
      return { ...prevState, description: e.target.value };
    });
  };

  const handlePopup = () => {
    setSettingsPopup(!settingsPopup);
  };

  const updateDefaultList = () => {
    const allOtherTodos = defaultList.filter((item) => item.id !== id);
    setDefaultList([...allOtherTodos, currentTodo]);
    setEditTodo(false);
  };

  return (
    <div className="todo_item">
      {!editTodo ? (
        <TodoItemContent
          description={description}
          handleCompletion={handleCompletion}
          defaultList={defaultList}
          handlePopup={handlePopup}
          item={item}
          setDefaultList={setDefaultList}
          setEditTodo={setEditTodo}
          settingsPopup={settingsPopup}
          currentTodo={currentTodo}
        />
      ) : (
        <div
          className={`todo_item_edit_input ${
            editTodo ? "active-edit_input" : "inactive-edit_input"
          }`}
        >
          <textarea value={currentTodo.description} onChange={handleEdit} />
          <button onClick={updateDefaultList}>+</button>
        </div>
      )}
    </div>
  );
};

// how would i handle the user creating their own lists?
const TodoList = ({ defaultList, name, setDefaultList }) => {
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    switch (name) {
      case "Completed":
        const completedList = defaultList.filter(
          (item) => item.completed === true
        );
        setCurrentList(completedList);
        break;
      case "Incomplete":
        const incompleteItems = defaultList.filter(
          (item) => item.completed === false
        );
        setCurrentList(incompleteItems);
        break;
      default:
      case "All Todos":
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

const Todo = ({ defaultList, setDefaultList }) => {
  const [name, setName] = useState("All");
  return (
    <>
      <div className="app_welcome">
        <Filter setName={setName} />
        <p className="todo_title">{name}</p>
      </div>
      <TodoList
        defaultList={defaultList}
        setDefaultList={setDefaultList}
        name={name}
      />
      <AddTodo setDefaultList={setDefaultList} defaultList={defaultList} />
    </>
  );
};
export default Todo;

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
