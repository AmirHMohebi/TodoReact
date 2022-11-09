import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, removeTodo }) => {
  const renderTodo = todos.map((todo) => (
    <Todo
      key={todo.id}
      title={todo.title}
      content={todo.content}
      id={todo.id}
      removeTodo={removeTodo}
    />
  ));

  return (
    <>
      {todos.length > 0 ? (
        <div className="todos">{renderTodo}</div>
      ) : (
        <h1 className="not-find">هیچ فعالیتی ثبت نشده است :(</h1>
      )}
    </>
  );
};

export default Todos;
