import React, { useState } from "react";

const InputField = (props) => {
  const [field, setField] = useState("");

  return (
    <div>
      <form onSubmit={(e) => props.addGroceryItem(e, field)}>
        <input
          type="text"
          name="title"
          id=""
          value={field}
          onChange={(e) => setField(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default InputField;
