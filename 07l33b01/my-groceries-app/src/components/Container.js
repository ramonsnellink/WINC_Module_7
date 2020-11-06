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
        { id: 5, title: "Iets", amount: 1 },
        { id: 6, title: "Nog iets", amount: 1 },
      ],
    };
  }

  handleClickGroceryItem = (id) => {
    // get the item to add to the list
    const itemToAdd = this.state.groceryItems.filter((item) => {
      return item.id === id;
    });

    // Check if the item exists
    const doesItemExist = this.state.shoppingListItems.find((item) => {
      return item.id === id;
    });

    if (doesItemExist) {
      const newShoppingList = [...this.state.shoppingListItems]; // make new array to change the amount of
      const indexOfItem = this.state.shoppingListItems.findIndex((item) => {
        return item.id === id;
      });
      newShoppingList[indexOfItem].amount = newShoppingList[indexOfItem].amount + 1;

      this.setState({ shoppingListItems: newShoppingList });
    } else {
      this.setState((prevState) => {
        return {
          shoppingListItems: [{ ...itemToAdd[0], amount: 1 }, ...prevState.shoppingListItems],
        };
      });
    }
  };

  // add an item to the shopping cart, if it doesn't exist there yet.

  emptyCart = (e) => {
    e.preventDefault();
    this.setState({ shoppingListItems: [] });
  };

  // handle Input field for adding a grocery item.
  addGroceryItem = (e, item) => {
    e.preventDefault();
    this.setState((prevState) => {
      // make a new ID based on the length of both lists
      const newId = prevState.groceryItems.length + prevState.shoppingListItems.length + 1;
      return {
        groceryItems: [{ id: newId, title: item }, ...prevState.groceryItems],
      };
    });
  };

  render = () => {
    return (
      <div className="container">
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
      </div>
    );
  };
}

export default Container;
