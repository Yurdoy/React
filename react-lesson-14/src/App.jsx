import { useDispatch } from "react-redux";
import "./App.css";
import { store } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const fullStoreData = store.getState();

  console.log(fullStoreData);

  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  );
}

export default App;
