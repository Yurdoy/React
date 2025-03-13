import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./components/Products";
import Users from "./components/Users";
import Articles from "./components/Articles";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Products />
      <Users />
      <Articles />
      <Gallery />
      <Menu />
    </>
  );
}

export default App;
