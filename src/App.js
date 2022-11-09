import React, { useState } from "react";
import CreateArea from "./components/CreateArea";

import Header from "./components/Header";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  const removeTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <Header />
      <CreateArea addTodo={addTodo} />
      <Todos todos={todos} removeTodo={removeTodo} />
    </>
  );
};

export default App;
