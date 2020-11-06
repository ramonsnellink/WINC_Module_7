import React from "react";

const ListItem = (props) => {
  return (
    <li
      key={props.id}
      value={props.title}
      className="list-item"
      onClick={() => props.handleClickGroceryItem(props.id)}
    >
      <span>{props.title}</span>
      {props.readonly ? <span>--{props.amount}</span> : ""}
    </li>
  );
};

export default ListItem;
