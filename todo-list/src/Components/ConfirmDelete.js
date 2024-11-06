// src/ConfirmDelete.js
import React from "react";

function ConfirmDelete({ show, onConfirm, onCancel }) {
  if (!show) return null;

  return (
    <div className="confirm-delete-overlay">
      <div className="confirm-delete-modal">
        <h3>Are you sure?</h3>
        <p>
          Do you really want to delete this item? This action cannot be undone.
        </p>
        <button className="confirm-btn" onClick={onConfirm}>
          Yes, delete
        </button>
        <button className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
