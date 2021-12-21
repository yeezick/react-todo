import Todo from "../components/todo/Todo";

const All = ({ defaultList, setDefaultList }) => {
  return (
    <div>
      <Todo defaultList={defaultList} setDefaultList={setDefaultList} />
    </div>
  );
};

export default All;
