import Todo from "../components/todo/Todo";

const All = ({ defaultList, setDefaultList }) => {
  return (
    <div>
      <Todo
        name="all"
        defaultList={defaultList}
        setDefaultList={setDefaultList}
      />
    </div>
  );
};

export default All;
