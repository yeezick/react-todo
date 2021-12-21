import { useEffect, useState } from "react";
import Todo from "../components/todo/Todo";

const Completed = ({ todoList, setTodoList }) => {
  const [completedList, setCompletedList] = useState(null);

  useEffect(() => {
    // const filterTodoList = () => {
    const filteredList = todoList.filter((item) => item.completed === true);
    setCompletedList(filteredList);
    // };
    // filterTodoList();
  }, [todoList]);

  return (
    <div>
      {completedList && (
        <Todo todoList={completedList} setTodoList={setTodoList} />
      )}
    </div>
  );
};

export default Completed;
