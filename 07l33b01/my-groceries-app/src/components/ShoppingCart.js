import React from "react";
import List from "./List";

const ShoppingCart = (props) => {
  return (
    <section className="shoppingcart">
      <h1 className="shoppingcart__title">Winkelmand</h1>
      <div className="shoppingcart__inputcontainer">
        <button className="shoppingcart__button" onClick={(e) => props.emptyCart(e)}>
          Leeg de Winkelmand
        </button>
      </div>
      <List
        listItems={props.listItems}
        handleClickGroceryItem={props.handleClickGroceryItem}
        readonly={true}
      />
    </section>
  );
};

export default ShoppingCart;
