import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "../styles/AddTodo.css";

export const AddTodo = ({ defaultList, setDefaultList, toggleRefresh }) => {
  const [newTodo, setNewTodo] = useState({
    title: "finish AddTodo",
    description: "",
    date: "",
    completed: false,
    id: "",
  });
  const [toggleError, setToggleError] = useState(false);

  useEffect(() => {
    const showError = setTimeout(() => {
      setToggleError(false);
    }, 4000);
    return () => {
      clearTimeout(showError);
    };
  }, [newTodo]);

  const handleNewTodo = (e) => {
    e.preventDefault();

    if (!newTodo.description) {
      setToggleError(true);
      return;
    }

    const finalTodo = {
      ...newTodo,
      id: `td${Math.random() * 50}`,
      date: new Date(),
    };

    let updatedList = [finalTodo, ...defaultList];
    updatedList = updatedList.sort((a, b) =>
      new Date(a.date) < new Date(b, a) ? 1 : -1
    );

    localStorage.setItem("defaultList", JSON.stringify(updatedList));
    setNewTodo((prevState) => {
      return { ...prevState, description: "" };
    });
    toggleRefresh((state) => !state);
  };

  return (
    <div className="addTodo_parent">
      <form onSubmit={handleNewTodo} className="addTodo_form">
        <input
          className="addTodo_input"
          type="text"
          placeholder="Add Todo"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo((prevState) => {
              return { ...prevState, description: e.target.value };
            })
          }
        />
        <button className="addTodo_button">
          <AiOutlineArrowUp size={30} />
        </button>
      </form>

      <div
        className={
          toggleError
            ? "addTodo_error active-error"
            : "addTodo_error inactive-error"
        }
      >
        <p>Cannot add an empty task</p>
      </div>
    </div>
  );
};
