// src/EditTodo.js
import React, { useState } from "react";

function EditTodo({ show, currentText, onSave, onCancel }) {
  const [text, setText] = useState(currentText);

  const handleSave = () => {
    onSave(text);
  };

  if (!show) return null;

  return (
    <div className="edit-todo-overlay">
      <div className="edit-todo-modal">
        <h3>Edit To-Do Item</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Update your task..."
        />
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditTodo;
