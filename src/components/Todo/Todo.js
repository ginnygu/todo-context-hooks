import React, { useContext } from "react";
import { TodoContext } from "../../context/context";

function Todo() {
  const {
    todoItem: { id, todo, isCompleted },
  } = useContext(TodoContext);

  return (
    <div>
      <span>{todo}</span>
      <button>Done</button>
      <button>Delete</button>
    </div>
  );
}

export default Todo;
