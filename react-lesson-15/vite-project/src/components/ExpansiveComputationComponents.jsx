import React from "react";
import { useState } from "react";

const ExpensiveComputation = (num) => {
  console.log("Expensive Computation");
  let result = 0;
  for (let index = 0; index < 1e8; index++) {
    result += num;
  }
  return result;
};
const ExpensiveComputationComponents = () => {
  const [number, setNumber] = useState(0);
  const [increment, setIncrement] = useState(0);
  const computatedValue = useMemo(() => ExpensiveComputation(number), [number]);
  return (
    <div>
      <h3>Expansive Computation</h3>
      <p>number: {number}</p>
      <p>increment: {increment}</p>
      <p>computatedValue: {computatedValue}</p>
    </div>
  );
};

export default ExpensiveComputationComponents;
