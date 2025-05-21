import { useContext } from "react";
import MyContext from "../context/MyContext";

const IncrementButton = () => {
  const { increment } = useContext(MyContext);
  return <button onClick={increment}>Increase</button>;
};

export default IncrementButton;
