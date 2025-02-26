import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleContainerClick = (event) => {
    if (event.target.dataset.action === "increment") {
      setCount((prevCount) => prevCount + 1);
    } else if (event.target.dataset.action === "decrement") {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div onClick={handleContainerClick}>
      <h2>Counter: {count}</h2>
      <button data-action="increment">+</button>
      <button data-action="decrement">-</button>
    </div>
  );
}

export default Counter;
