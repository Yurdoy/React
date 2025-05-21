import React, { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import MyProvider from "./components/MyProvider";
import CounterDisplay from "./components/CounterDisplay";
import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";
import { DataProvider } from "./components/Provider";
import SomeComponent from "./components/SomeComponent";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeSwitcher />
      </ThemeContext.Provider>
      <MyProvider>
        <CounterDisplay />
        <IncrementButton />
        <DecrementButton />
      </MyProvider>
      <DataProvider>
        <SomeComponent />
      </DataProvider>
    </div>
  );
}

export default App;
