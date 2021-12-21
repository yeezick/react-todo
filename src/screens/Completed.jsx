import { useEffect, useState } from "react";
import TodoItemWrapper from "../components/todo/Todo";

const Completed = ({ todoList }) => {
  const [completedList, setCompletedList] = useState(null);

  useEffect(() => {
    // const filterTodoList = () => {
    const filteredList = todoList.filter((item) => item.completed === true);
    setCompletedList(filteredList);
    // };
    // filterTodoList();
  }, [todoList]);

  return (
    <div>{completedList && <TodoItemWrapper todoList={completedList} />}</div>
  );
};

export default Completed;
