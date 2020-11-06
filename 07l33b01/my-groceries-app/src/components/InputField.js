import React, { useState } from "react";

const InputField = (props) => {
  const [field, setField] = useState("");

  return (
    <form className="groceries__inputcontainer" onSubmit={(e) => props.addGroceryItem(e, field)}>
      <input
        className="groceries__input"
        type="text"
        name="title"
        id=""
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
      <button className="groceries__button" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
