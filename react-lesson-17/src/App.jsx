import "./App.css";
import { useState } from "react";
import DisplayMessage from "./components/DisplayMessage";
import CheckDiscount from "./components/CheckDiscount";

function App() {
  const [text, setText] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(false);
  const showDiscount = () => {
    setHasDiscount(!hasDiscount);
  };

  const clickHandler = () => {
    setText(!text);
  };
  return (
    <>
      <CheckDiscount hasDiscount={hasDiscount} handleClick={showDiscount} />
      <DisplayMessage />
      <button onClick={clickHandler}>Click me</button>
      {text && <p>Click!!!</p>}
    </>
  );
}

export default App;
