import Todo from "../components/todo/Todo";

const All = ({ defaultList, setTodoList }) => {
  return (
    <div>
      <Todo defaultList={defaultList} setTodoList={setTodoList} />
    </div>
  );
};

export default All;
