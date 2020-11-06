import React from "react";
import List from "./List";
import InputField from "./InputField";

const GroceryList = (props) => {
  return (
    <section className="groceries">
      <h1 className="groceries__title">Boodschappenlijst</h1>
      <InputField addGroceryItem={props.addGroceryItem} />
      <List
        listItems={props.listItems}
        handleClickGroceryItem={props.handleClickGroceryItem}
        readonly={false}
      />
    </section>
  );
};

export default GroceryList;
