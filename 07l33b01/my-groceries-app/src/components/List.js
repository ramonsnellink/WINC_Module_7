import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  const makeList = () => {
    const list = props.listItems.map((item) => {
      return (
        <ListItem
          title={item.title}
          key={item.id}
          handleClickGroceryItem={props.handleClickGroceryItem}
          id={item.id}
        />
      );
    });
    return list;
  };
  return <ul>{makeList()}</ul>;
};

export default List;
