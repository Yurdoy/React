import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Rating from "./components/Rating";
import List from "./components/List";

function App() {
  return (
    <>
      <h1>Please Rate My Homework</h1>
      <Rating />
      <h1>People List Manager</h1>
      <List />
    </>
  );
}

export default App;
