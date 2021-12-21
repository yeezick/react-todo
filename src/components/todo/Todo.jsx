import { useState } from "react";

/** this component is responsible for the wrapping todo component as well as the structure of each todo item
 * these todos should have:
 * - a title
 * - a description
 * - whether they are done or not done
 * - a date of creation
 */

const todoList = [
  {
    title: "title",
    description: "description",
    date: "date",
    completed: false,
  },
  {
    title: "title",
    description: "description",
    date: "date",
    completed: true,
  },
  {
    title: "title",
    description: "description",
    date: "date",
    completed: false,
  },
];

const TodoItem = ({ title, description, date, completed, idx }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <div style={{ border: " 1px solid red", maxWidth: "30%" }}>
      <p className="todo_title">{title}</p>
      <p className="todo_desc">{description}</p>
      <p className="todo_date">{date}</p>
      <input
        type="checkbox"
        checked={isCompleted ? true : false}
        onClick={() => setIsCompleted((prev) => !prev)}
      />
    </div>
  );
};

const TodoItemWrapper = ({ todoList }) => {
  return (
    <>
      {todoList.map(({ title, description, date, completed }, idx) => (
        <TodoItem
          title={title}
          description={description}
          date={date}
          completed={completed}
          key={`todo-${idx}`}
          index={idx}
        />
      ))}
    </>
  );
};
export default TodoItemWrapper;
