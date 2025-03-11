import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./components/Component";
import DualEffectComponent from "./components/DualEffectComponent";
import ColorChangeComponent from "./components/ColorChangeComponent";

function App() {
  return (
    <>
      <Component />
      <DualEffectComponent />
      <ColorChangeComponent />
    </>
  );
}

export default App;
