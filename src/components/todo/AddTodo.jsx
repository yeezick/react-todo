import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./AddTodo.css";

const AddTodo = ({ setDefaultList }) => {
  const [newTodo, setNewTodo] = useState({
    title: "finish AddTodo",
    description: "",
    date: "never",
    completed: false,
    id: `td${Math.random() * 50}`,
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
    console.log("desc:", newTodo);
    if (!newTodo.description) {
      setToggleError(true);
      return;
    }
    setDefaultList((prevState) => {
      return [...prevState, newTodo];
    });
    setNewTodo((prevState) => {
      return { ...prevState, description: "" };
    });
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

export default AddTodo;
