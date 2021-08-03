import React, { useState, useContext } from "react";
import { TodoInputContext } from "../../context/context";

function TodoInput() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useContext(TodoInputContext);

  function handleTodoSubmit(e) {
    e.preventDefault();

    addTodo(todo);
  }

  return (
    <form onSubmit={handleTodoSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoInput;
