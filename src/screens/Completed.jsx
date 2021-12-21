import { useEffect, useState } from "react";
import Todo from "../components/todo/Todo";

const Completed = ({ defaultList, setDefaultList }) => {
  return (
    <div>
      <Todo
        name="completed"
        defaultList={defaultList}
        setDefaultList={setDefaultList}
      />
    </div>
  );
};

export default Completed;
