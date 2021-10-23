import React from "react";

export default function Todo() {
  return (
    <div>
      <h1 data-testid="header">Todo App</h1>
      <button data-testid="add-btn">+</button>
      <button data-testid="delete-btn">Delete</button>
    </div>
  );
}
