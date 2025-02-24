import React, { useState } from "react";

function Calculate() {
  const [count, setCount] = useState(0);

  const increaseValue = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseValue = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const zeroValue = () => {
    setCount((prevCount) => 0);
  };

  return (
    <div className="Calulate">
      <h1>Current count: {count}</h1>
      <button onClick={zeroValue}>Reset</button>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </div>
  );
}

export default Calculate;
