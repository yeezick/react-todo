import Todo from "../components/todo/Todo";

const Home = ({ todoList, setTodoList }) => {
  return (
    <div>
      <Todo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Home;
