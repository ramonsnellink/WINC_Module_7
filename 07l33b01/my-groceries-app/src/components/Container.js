import React from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Pak melk" },
        { id: 3, title: "Koekjes" },
        { id: 4, title: "Snoep" },
      ],
      shoppingListItems: [
        { id: 5, title: "Iets" },
        { id: 6, title: "Nog iets" },
      ],
    };
  }

  handleClickGroceryItem = (id) => {
    const itemToAdd = this.state.groceryItems.filter((item) => {
      return item.id === id;
    });
    console.log("Item to add", itemToAdd);

    this.setState((prevState) => {
      return {
        shoppingListItems: [itemToAdd[0], ...prevState.shoppingListItems],
      };
    });
  };

  emptyCart = (e) => {
    e.preventDefault();
    this.setState({ shoppingListItems: [] });
  };

  addGroceryItem = (e, item) => {
    e.preventDefault();
    console.log(item);
  };

  render = () => {
    return (
      <div>
        <GroceryList
          listItems={this.state.groceryItems}
          handleClickGroceryItem={this.handleClickGroceryItem}
          addGroceryItem={this.addGroceryItem}
        />
        <ShoppingCart
          listItems={this.state.shoppingListItems}
          handleClickGroceryItem={() => ""}
          emptyCart={this.emptyCart}
        />
        {console.log(this.state)}
      </div>
    );
  };
}

export default Container;
