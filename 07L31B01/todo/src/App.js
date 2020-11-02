/**

 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react";
import todosData from "./todosData";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: todosData };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatesTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return { todos: updatesTodos };
    });
  }

  render() {
    const todoList = this.state.todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          handleChange={this.handleChange}
        />
      );
    });

    return <div className="todolist">{todoList}</div>;
  }
}

export default App;
/*
Time to have fun styling! But first things first: 

1. Change the input/p combo below to be a new component called <TodoItem />. <TodoItem /> (for now) will just have the same displayed data below (every todo item is the same) hardcoded inside of it. (We'll learn soon how to make the TodoItem more flexible)
    
2. Style up the page however you want! You're welcome to use regular CSS (in the CSS file) or inline styles, or both!
*/
