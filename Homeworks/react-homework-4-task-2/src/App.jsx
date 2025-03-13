import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MathQuiz from "./components/MathQuiz";
import Answer from "./components/Answer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MathQuiz />
      <Answer />
    </>
  );
}

export default App;
