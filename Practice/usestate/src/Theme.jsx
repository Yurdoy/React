import React, { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState(true);

  const themeToggle = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const themeStyle = {
    backgroundColor: theme ? "white" : "black",
    color: theme ? "black" : "white",
  };

  return (
    <div style={themeStyle}>
      <h2>Switch Theme</h2>
      <button onClick={themeToggle}>Dark/Light Theme</button>
    </div>
  );
}

export default Theme;
