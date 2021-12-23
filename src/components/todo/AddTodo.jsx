import { useState } from "react";
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

  const handleNewTodo = (e) => {
    e.preventDefault();
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
    </div>
  );
};

export default AddTodo;
