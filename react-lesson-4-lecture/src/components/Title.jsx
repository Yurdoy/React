import React, { useState } from "react";

function Title() {
  const [title, setTitle] = useState("Initial Text");

  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        placeholder="Enter text"
        onChange={(e) => changeTitle(e.target.value)}
      />
    </div>
  );
}

export default Title;
