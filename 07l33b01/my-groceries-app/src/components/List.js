import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  const makeList = () => {
    const list = props.listItems.map((item) => {
      // const isReadOnly = () => {
      //   return props.readonly?
      // }
      return (
        <ListItem
          title={item.title}
          key={item.id}
          handleClickGroceryItem={props.handleClickGroceryItem}
          id={item.id}
          amount={item.amount}
          readonly={props.readonly}
        />
      );
    });
    return list;
  };
  return <ul>{makeList()}</ul>;
};

export default List;
