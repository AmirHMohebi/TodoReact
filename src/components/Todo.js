import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ title, content, id, removeTodo }) => {
  const todoDeleteHandler = () => {
    removeTodo(id);
  };
  return (
    <>
      <div className="todo">
        <h3 className="todo-title">{title}</h3>
        <p className="todo-content">
          {content}
          <DeleteIcon
            className="deleteIcon"
            sx={{ fontSize: 40 }}
            onClick={() => todoDeleteHandler()}
          />
        </p>
      </div>
    </>
  );
};

export default Todo;

// Your account has been created with username epiz_32962772!
// QZ4I9yOShsRacJK
