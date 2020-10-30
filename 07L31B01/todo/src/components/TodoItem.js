import React from "react";

const TodoItem = () => {
  return (
    <div className="todo">
      <input className="todo__checkbox" type="checkbox" />
      <p className="todo__text">Todo 1</p>
    </div>
  );
};

export default TodoItem;
