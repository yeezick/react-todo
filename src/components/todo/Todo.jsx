//! todoItem is rendering twice! look into why this is happening
//! filtering for all other todos 3x in this component alone, opportunity to DRY up that logic

import { useState, useEffect } from "react";
import AddTodo from "./blocks/AddTodo";
import TodoItemContent from "./blocks/TodoItemContent";

import "./Todo.css";

const sortList = (list) => {
  const sortedList = list.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
  return sortedList;
};

const TodoItem = ({ item, defaultList, setDefaultList, toggleRefresh }) => {
  const [currentTodo, setCurrentTodo] = useState({});
  const [editTodo, setEditTodo] = useState(false);
  const { description, id } = item;

  useEffect(() => {
    const findTodo = defaultList.filter((item) => item.id === id);
    setCurrentTodo(...findTodo);
  }, [defaultList, id, item]); // why did adding item to this dependency solve so many bugs?

  const handleCompletion = () => {
    const allTodos = defaultList.filter((item) => item.id !== id);
    const updatedTodo = { ...currentTodo, completed: !currentTodo.completed };
    const updatedList = [...allTodos, updatedTodo];
    localStorage.setItem("defaultList", JSON.stringify(updatedList));
    toggleRefresh((state) => !state);
  };

  const handleEdit = (e) => {
    setCurrentTodo((prevState) => {
      return { ...prevState, description: e.target.value };
    });
  };

  const updateDefaultList = () => {
    const allOtherTodos = defaultList.filter((item) => item.id !== id);
    const updatedList = [...allOtherTodos, currentTodo];
    localStorage.setItem("defaultList", JSON.stringify(updatedList));
    toggleRefresh((state) => !state);
    setEditTodo(false);
  };

  return (
    <div className="todo_item">
      {!editTodo ? (
        <TodoItemContent
          description={description}
          handleCompletion={handleCompletion}
          defaultList={defaultList}
          item={item}
          setDefaultList={setDefaultList}
          setEditTodo={setEditTodo}
          currentTodo={currentTodo}
          toggleRefresh={toggleRefresh}
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
const TodoList = ({
  defaultList,
  name,
  setDefaultList,
  refresh,
  toggleRefresh,
}) => {
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    switch (name) {
      case "Completed":
        const completedList = defaultList.filter(
          (item) => item.completed === true
        );
        const sortedCompleted = sortList(completedList);
        setCurrentList(sortedCompleted);
        break;
      case "Incomplete":
        const incompleteItems = defaultList.filter(
          (item) => item.completed === false
        );
        const sortedIncomplete = sortList(incompleteItems);
        setCurrentList(sortedIncomplete);
        break;
      default:
        const sortedList = sortList(defaultList);
        setCurrentList(sortedList);
        break;
    }
  }, [defaultList, refresh, name]);

  return (
    <div className="todo_list_parent">
      {currentList.map((item, idx) => (
        <TodoItem
          defaultList={defaultList}
          currentList={currentList}
          key={`todo-${idx}`}
          item={item}
          setDefaultList={setDefaultList}
          toggleRefresh={toggleRefresh}
        />
      ))}
    </div>
  );
};

const Todo = () => {
  const [name, setName] = useState("All");
  const [refresh, toggleRefresh] = useState(false);
  const [defaultList, setDefaultList] = useState([]);

  useEffect(() => {
    setDefaultList(JSON.parse(localStorage.getItem("defaultList")));
  }, [refresh]);

  return (
    <>
      <div className="app_welcome">
        <Filter setName={setName} />
        <p className="todo_title">{name}</p>
      </div>
      <TodoList
        defaultList={defaultList}
        toggleRefresh={toggleRefresh}
        refresh={refresh}
        name={name}
      />
      <AddTodo
        defaultList={defaultList}
        setDefaultList={setDefaultList}
        toggleRefresh={toggleRefresh}
      />
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
