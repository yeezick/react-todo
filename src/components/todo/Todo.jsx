//! todoItem is rendering twice! look into why this is happening
//! filtering for all other todos 3x in this component alone, opportunity to DRY up that logic
import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";

import { BsThreeDotsVertical } from "react-icons/bs";
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

  const handlePopup = () => {
    setSettingsPopup(!settingsPopup);
  };

  const handleEdit = (e) => {
    setCurrentTodo((prevState) => {
      return { ...prevState, description: e.target.value };
    });
  };

  const updateDefaultList = (e) => {
    const allOtherTodos = defaultList.filter((item) => item.id !== id);
    setDefaultList([...allOtherTodos, currentTodo]);
    setEditTodo(false);
  };

  return (
    <div className="todo_item">
      {!editTodo ? (
        <>
          <div className="todo_item_content" onClick={handleCompletion}>
            <div
              className={
                currentTodo?.completed
                  ? "todo_item_checkbox active-checkbox"
                  : "todo_item_checkbox"
              }
            ></div>
            <p className="todo_item_desc">{description}</p>
          </div>
          <div className="todo_item_settings_wrapper">
            <SettingsPopup
              settingsPopup={settingsPopup}
              handlePopup={handlePopup}
              setEditTodo={setEditTodo}
              item={item}
              setDefaultList={setDefaultList}
              defaultList={defaultList}
            />
            <BsThreeDotsVertical size={20} onClick={handlePopup} />
          </div>
        </>
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
const SettingsPopup = ({
  settingsPopup,
  handlePopup,
  item,
  defaultList,
  setDefaultList,
  setEditTodo,
}) => {
  const handleDelete = () => {
    const allOtherTodos = defaultList.filter((todo) => todo.id !== item.id);
    setDefaultList(allOtherTodos);
    handlePopup();
  };
  const closePopupOnEdit = () => {
    handlePopup();
    setEditTodo(true);
  };
  return (
    <div
      className={`todo_item_settings ${
        settingsPopup ? "active-popup" : "inactive-popup"
      }`}
    >
      <p onClick={handleDelete}>Delete</p>
      <p onClick={closePopupOnEdit}>Edit</p>
    </div>
  );
};

// how would i handle the user creating their own lists?
const TodoList = ({ defaultList, setDefaultList, name }) => {
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

const Todo = ({ defaultList, setDefaultList, name }) => {
  return (
    <>
      <div className="app_welcome">
        <p className="todo_title">{name}</p>
      </div>
      <TodoList
        defaultList={defaultList}
        setDefaultList={setDefaultList}
        name={name}
      />
      <AddTodo setDefaultList={setDefaultList} />
    </>
  );
};
export default Todo;
