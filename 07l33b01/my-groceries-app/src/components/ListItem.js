import React from "react";

const ListItem = (props) => {
  return (
    <li
      key={props.id}
      value={props.title}
      className="list-item"
      onClick={() => props.handleClickGroceryItem(props.id)}
    >
      {props.title}
    </li>
  );
};

export default ListItem;
