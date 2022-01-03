import { useEffect, useState } from "react";
import { TodoItemContent } from "./TodoItemContent";

export const TodoItem = ({ item, defaultList, toggleRefresh }) => {
  const [currentTodo, setCurrentTodo] = useState({});
  const [editTodo, setEditTodo] = useState(false);
  const { completed, id } = item;

  useEffect(() => {
    setCurrentTodo(item);
  }, [defaultList, id, item]); // why did adding item to this dependency solve so many bugs?

  const handleCompletion = () => {
    const allTodos = defaultList.filter((todo) => todo.id !== id);
    const updatedTodo = { ...currentTodo, completed: !completed };
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
          handleCompletion={handleCompletion}
          defaultList={defaultList}
          item={item}
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
