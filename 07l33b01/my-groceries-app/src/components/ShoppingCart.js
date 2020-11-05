import React from "react";
import List from "./List";

const ShoppingCart = (props) => {
  return (
    <div>
      <button onClick={(e) => props.emptyCart(e)}>Leeg de Winkelmand</button>
      <List listItems={props.listItems} handleClickGroceryItem={props.handleClickGroceryItem} />
    </div>
  );
};

export default ShoppingCart;
