import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Pak melk" },
      ],
    };
  }

  makeGroceriesList = () => {
    const groceriesList = this.state.groceryItems.map((item) => {
      return <ListItem title={item.title} key={item.id} />;
    });
    return groceriesList;
  };

  render() {
    return <ul>{this.makeGroceriesList()}</ul>;
  }
}

export default List;
