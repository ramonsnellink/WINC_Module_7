import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo">
      <input className="todo__checkbox" type="checkbox" checked={props.completed} />
      <p className="todo__text">{props.text}</p>
    </div>
  );
};

export default TodoItem;
