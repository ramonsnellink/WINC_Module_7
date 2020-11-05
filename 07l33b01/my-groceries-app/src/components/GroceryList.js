import React from "react";
import List from "./List";
import InputField from "./InputField";

const GroceryList = (props) => {
  return (
    <div>
      <InputField addGroceryItem={props.addGroceryItem} />
      <List listItems={props.listItems} handleClickGroceryItem={props.handleClickGroceryItem} />
    </div>
  );
};

export default GroceryList;
