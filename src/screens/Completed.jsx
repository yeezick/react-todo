import { useEffect, useState } from "react";
import Todo from "../components/todo/Todo";

const Completed = ({ todoList }) => {
  const [completedList, setCompletedList] = useState(null);

  useEffect(() => {
    // const filterTodoList = () => {
    const filteredList = todoList.filter((item) => item.completed === true);
    setCompletedList(filteredList);
    // };
    // filterTodoList();
  }, [todoList]);

  return <div>{completedList && <Todo todoList={completedList} />}</div>;
};

export default Completed;
