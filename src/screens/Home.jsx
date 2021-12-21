import Todo from "../components/todo/Todo";

const Home = ({ todoList }) => {
  return (
    <div>
      <Todo todoList={todoList} />
    </div>
  );
};

export default Home;
