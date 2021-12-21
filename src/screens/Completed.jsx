import { useEffect, useState } from "react";
import Todo from "../components/todo/Todo";

const Completed = ({ defaultList, setTodoList }) => {
  const [completedList, setCompletedList] = useState(null);

  useEffect(() => {
    // const filterTodoList = () => {
    const filteredList = defaultList.filter((item) => item.completed === true);
    setCompletedList(filteredList);
    // };
    // filterTodoList();
  }, [defaultList]);
  console.log("completed", completedList);
  return (
    <div>
      {completedList && (
        <Todo completed defaultList={completedList} setTodoList={setTodoList} />
      )}
    </div>
  );
};

export default Completed;
