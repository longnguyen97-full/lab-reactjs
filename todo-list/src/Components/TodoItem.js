import React, { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import EditTodo from "./EditTodo";

function TodoItem({ todo, toggleComplete, updateTodo, deleteTodo }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Handlers for edit
  const handleEditClick = () => {
    setShowEdit(true);
  };

  const saveEdit = (newText) => {
    updateTodo(todo.id, newText);
    setShowEdit(false);
  };

  const cancelEdit = () => {
    setShowEdit(false);
  };

  // Handlers for delete confirmation
  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    deleteTodo(todo.id);
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <span className="todo-text" onClick={() => toggleComplete(todo.id)}>
          {todo.text}
        </span>
        <div className="btn-group" role="group" aria-label="CRUD">
          <button type="button" className="btn btn-warning" onClick={handleEditClick}>
            Edit
          </button>
          <button type="button" className="btn btn-danger" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </li>
      <EditTodo
        show={showEdit}
        currentText={todo.text}
        onSave={saveEdit}
        onCancel={cancelEdit}
      />
      <ConfirmDelete
        show={showConfirm}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </>
  );
}

export default TodoItem;
