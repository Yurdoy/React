import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
