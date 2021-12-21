import TodoItemWrapper from "../components/todo/Todo";

const Home = ({ todoList }) => {
  return (
    <div>
      <TodoItemWrapper todoList={todoList} />
    </div>
  );
};

export default Home;
