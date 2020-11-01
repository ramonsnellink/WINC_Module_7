import React from "react";
import todosData from "./todosData";
import TodoItem from "./components/TodoItem";

const App = () => {
  const todoList = todosData.map((todo) => {
    return <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />;
  });

  return <div className="todolist">{todoList}</div>;
};

export default App;
/*
Time to have fun styling! But first things first: 

1. Change the input/p combo below to be a new component called <TodoItem />. <TodoItem /> (for now) will just have the same displayed data below (every todo item is the same) hardcoded inside of it. (We'll learn soon how to make the TodoItem more flexible)
    
2. Style up the page however you want! You're welcome to use regular CSS (in the CSS file) or inline styles, or both!
*/
