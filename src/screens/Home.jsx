import Todo from "../components/todo/Todo";

const Home = ({ defaultList, setDefaultList }) => {
  return (
    <div>
      <Todo
        defaultList={defaultList}
        setDefaultList={setDefaultList}
        name="Incomplete"
      />
    </div>
  );
};

export default Home;
