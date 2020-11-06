import React from "react";

const ListItem = (props) => {
  return (
    <li
      key={props.id}
      value={props.title}
      className="list__item"
      onClick={() => props.handleClickGroceryItem(props.id)}
    >
      <span className="list__itemtitle">{props.title}</span>
      {props.readonly ? <span className="list__itemamount">Aantal: {props.amount}</span> : ""}
    </li>
  );
};

export default ListItem;
