export const SettingsPopup = ({
  defaultList,
  handlePopup,
  item,
  setDefaultList,
  setEditTodo,
  settingsPopup,
}) => {
  const closePopupOnEdit = () => {
    handlePopup();
    setEditTodo(true);
  };

  const handleDelete = () => {
    const allOtherTodos = defaultList.filter((todo) => todo.id !== item.id);
    setDefaultList(allOtherTodos);
    handlePopup();
  };

  return (
    <div
      className={`todo_item_settings ${
        settingsPopup ? "active-popup" : "inactive-popup"
      }`}
    >
      <p onClick={handleDelete}>Delete</p>
      <p onClick={closePopupOnEdit}>Edit</p>
    </div>
  );
};
