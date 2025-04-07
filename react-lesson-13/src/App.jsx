import "./App.css";
import { useDispatch } from "react-redux";
import { store } from "./store/reducers/store";

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
