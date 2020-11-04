import React from "react";

const ListItem = (props) => {
  return (
    <li key={props.id} value={props.title} className="list-item">
      {props.title}
    </li>
  );
};

export default ListItem;
