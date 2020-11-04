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
      ],
    };
  }

  // makeGroceriesList = () => {
  //   const groceriesList = this.state.groceryItems.map((item) => {
  //     return <ListItem title={item.title} key={item.id} />;
  //   });
  //   return groceriesList;
  // };

  render() {
    return (
      <div>
        <GroceryList />
        <ShoppingCart />
      </div>
    );
  }
}

export default Container;
