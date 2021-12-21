import Todo from "../components/todo/Todo";

const Home = ({ defaultList, setTodoList }) => {
  return (
    <div>
      <Todo defaultList={defaultList} setTodoList={setTodoList} />
    </div>
  );
};

export default Home;
