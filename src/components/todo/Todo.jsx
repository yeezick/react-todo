//! todoItem is rendering twice! look into why this is happening
import { useState, useEffect } from "react";

import AddTodo from "./AddTodo";
/** this component is responsible for the wrapping todo component as well as the structure of each todo item
 * these todos should have:
 * - a title
 * - a description
 * - whether they are done or not done
 * - a date of creation
 */

const TodoItem = ({
  title,
  description,
  date,
  completed,
  id,
  setDefaultList,
  defaultList,
}) => {
  const [singleTodo, setSingleTodo] = useState({
    completed,
    date,
    description,
    id,
    title,
  });

  const handleCompletion = (e) => {
    const { checked } = e.target;
    const fetchAllOtherTodos = defaultList.filter((item) => item.id !== id);
    setDefaultList(() => {
      console.log("Current updating:", [
        ...fetchAllOtherTodos,
        { ...singleTodo, completed: checked },
      ]);
      return [...fetchAllOtherTodos, { ...singleTodo, completed: checked }];
    });
    setSingleTodo((prevState) => {
      return { ...prevState, completed: checked };
    });
  };

  return (
    <div style={{ border: " 1px solid red", maxWidth: "30%" }}>
      <p className="todo_title">{title}</p>
      <p className="todo_desc">{description}</p>
      <p className="todo_date">{date}</p>
      <input
        type="checkbox"
        checked={singleTodo.completed ? true : false}
        onChange={(e) => handleCompletion(e)}
      />
    </div>
  );
};

const Todo = ({ defaultList, setDefaultList, completed }) => {
  return (
    <>
      <TodoList
        defaultList={defaultList}
        setDefaultList={setDefaultList}
        completed={completed}
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
const TodoList = ({ defaultList, setDefaultList, completed }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (completed) {
      setList(defaultList);
    } else {
      const incompleteItems = defaultList.filter(
        (item) => item.completed === false
      );
      setList(incompleteItems);
    }
  }, [defaultList]);
  console.log("list", completed);
  return (
    <>
      {list.map(({ title, description, date, completed, id }, idx) => (
        <TodoItem
          title={title}
          description={description}
          date={date}
          completed={completed}
          key={`todo-${idx}`}
          id={id}
          setDefaultList={setDefaultList}
          defaultList={defaultList}
        />
      ))}
    </>
  );
};
export default Todo;
