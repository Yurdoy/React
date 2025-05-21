import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext.js";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div
      style={
        theme === "dark"
          ? { background: "DarkGray" }
          : { background: "LightBlue" }
      }
    >
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
