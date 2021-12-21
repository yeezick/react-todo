import { useState } from "react";

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
    <div>
      <form onSubmit={handleNewTodo}>
        <input
          type="text"
          placeholder="Add Todo"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo((prevState) => {
              return { ...prevState, description: e.target.value };
            })
          }
        />
        <button> + </button>
      </form>
    </div>
  );
};

export default AddTodo;
