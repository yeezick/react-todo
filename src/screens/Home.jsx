import Todo from "../components/todo/Todo";

const Home = ({ defaultList, setDefaultList }) => {
  return (
    <div>
      <Todo defaultList={defaultList} setDefaultList={setDefaultList} />
    </div>
  );
};

export default Home;
