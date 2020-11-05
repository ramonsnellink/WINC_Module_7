import React from "react";

const InputField = (props) => {
  return (
    <div>
      <form>
        <input type="text" name="title" id="" />
        <button onClick={(e) => props.addGroceryItem(e, "dit")}>Voeg toe</button>
      </form>
    </div>
  );
};

export default InputField;
