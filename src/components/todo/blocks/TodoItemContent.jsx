import { SettingsPopup } from "./SettingsPopup";
import { BsThreeDotsVertical } from "react-icons/bs";

const TodoItemContent = ({
  handleCompletion,
  defaultList,
  description,
  handlePopup,
  item,
  setDefaultList,
  setEditTodo,
  settingsPopup,
  currentTodo,
}) => {
  return (
    <>
      <div className="todo_item_content" onClick={handleCompletion}>
        <div
          className={
            currentTodo?.completed
              ? "todo_item_checkbox active-checkbox"
              : "todo_item_checkbox"
          }
        ></div>
        <p className="todo_item_desc">{description}</p>
      </div>
      <div className="todo_item_settings_wrapper">
        <SettingsPopup
          defaultList={defaultList}
          handlePopup={handlePopup}
          item={item}
          setDefaultList={setDefaultList}
          setEditTodo={setEditTodo}
          settingsPopup={settingsPopup}
        />
        <BsThreeDotsVertical size={20} onClick={handlePopup} />
      </div>
    </>
  );
};

export default TodoItemContent;
