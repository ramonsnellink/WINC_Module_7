import React from "react";

const TodoItem = (props) => {
  const todoTextStyle = props.completed ? "todo__text todo__text--completed" : "todo__text";
  return (
    <div className="todo">
      <input
        className="todo__checkbox"
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleChange(props.id)}
      />
      <p className={todoTextStyle}>{props.text}</p>
    </div>
  );
};

export default TodoItem;
