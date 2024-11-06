import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText(""); // Clear input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-group my-3 w-25 m-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          aria-label="Add a new task..."
          aria-describedby="basic-addon2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
