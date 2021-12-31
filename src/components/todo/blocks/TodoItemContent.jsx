import { BsTrashFill } from "react-icons/bs";

const TodoItemContent = ({
  handleCompletion,
  defaultList,
  description,
  item,
  setDefaultList,
  setEditTodo,
  currentTodo,
}) => {
  const handleDelete = () => {
    const allOtherTodos = defaultList.filter((todo) => todo.id !== item.id);
    setDefaultList(allOtherTodos);
  };
  return (
    <>
      <div className="todo_item_content">
        <div
          className={
            currentTodo?.completed
              ? "todo_item_checkbox active-checkbox"
              : "todo_item_checkbox"
          }
          onClick={handleCompletion}
        ></div>
        <p className="todo_item_desc" onClick={() => setEditTodo(true)}>
          {description}
        </p>
      </div>
      <div className="todo_item_settings_wrapper">
        <BsTrashFill size={20} onClick={handleDelete} />
      </div>
    </>
  );
};

export default TodoItemContent;
