import { useContext } from "react";
import MyContext from "../context/MyContext";

const DecrementButton = () => {
  const { decrement } = useContext(MyContext);
  return <button onClick={decrement}>Increase</button>;
};

export default DecrementButton;
