import { useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";

const sortList = (list) => {
  const sortedList = list.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
  return sortedList;
};

// how would i handle the user creating their own lists?
export const TodoList = ({
  defaultList,
  name,
  setDefaultList,
  refresh,
  toggleRefresh,
}) => {
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    switch (name) {
      case "Completed":
        const completedList = defaultList.filter(
          (item) => item.completed === true
        );
        const sortedCompleted = sortList(completedList);
        setCurrentList(sortedCompleted);
        break;
      case "Incomplete":
        const incompleteItems = defaultList.filter(
          (item) => item.completed === false
        );
        const sortedIncomplete = sortList(incompleteItems);
        setCurrentList(sortedIncomplete);
        break;
      default:
        const sortedList = sortList(defaultList);
        setCurrentList(sortedList);
        break;
    }
  }, [defaultList, refresh, name]);

  return (
    <div className="todo_list_parent">
      {currentList.map((item, idx) => (
        <TodoItem
          defaultList={defaultList}
          currentList={currentList}
          key={`todo-${idx}`}
          item={item}
          setDefaultList={setDefaultList}
          toggleRefresh={toggleRefresh}
        />
      ))}
    </div>
  );
};
