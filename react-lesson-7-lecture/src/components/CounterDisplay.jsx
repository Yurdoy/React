import React from "react";
import { useContext } from "react";
import MyContext from "../context/MyContext";

const CounterDisplay = () => {
  const { count } = useContext(MyContext);
  return <h1>Count: {count}</h1>;
};

export default CounterDisplay;
