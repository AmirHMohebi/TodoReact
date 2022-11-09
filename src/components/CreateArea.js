import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TITLE":
      return { title: action.payload, content: state.content };
    case "ADD_CONTENT":
      return { title: state.title, content: action.payload };
    case "RESET":
      return { title: "", content: "" };
    default:
      return state;
  }
};

const CreateArea = ({ addTodo }) => {
  const [state, dispatch] = useReducer(reducer, { title: "", content: "" });

  const onTitleChange = (e) => {
    dispatch({ type: "ADD_TITLE", payload: e.target.value });
  };

  const onContentChange = (e) => {
    dispatch({ type: "ADD_CONTENT", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      title: state.title,
      content: state.content,
      id: Math.random() * 100,
    });

    dispatch({ type: "RESET" });
  };

  return (
    <>
      <div>
        <form className="create-note" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="title"
            placeholder="عنوان فعالیت"
            value={state.title}
            onChange={(e) => onTitleChange(e)}
          />
          <textarea
            name="content"
            rows={3}
            placeholder="شرح فعالیت..."
            value={state.content}
            onChange={(e) => onContentChange(e)}
          />
          <button>+</button>
        </form>
      </div>
    </>
  );
};

export default CreateArea;
