import React from "react";
import { useState } from "react";
import MyContext from "../context/MyContext";

const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <MyContext.Provider value={{ increment, decrement, count }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
