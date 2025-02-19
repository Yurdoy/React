import EventsComponent from "./components/EventsComponent";
import UsernameInput from "./components/UserNameInput";

function App() {
  const strArr = ["hello", "world", "this is ", "me"];
  const newArr = ["unique", "he ", "she", "it "];
  const handleClick = (arg) => {
    console.log("hello world ", arg);
  };
  const sayHello = () => {
    console.log("Hello world");
  };
  return (
    <>
      <button onClick={sayHello}>Push button</button>
      <button onClick={() => console.log("Hello")}>Click</button>
      {strArr.map((item, index) => (
        <button onClick={() => handleClick(item)} key={index}>
          Click, Item
        </button>
      ))}
      <h1 onClick={() => console.log("Click")}>Click</h1>
      <h1 onMouseOver={() => console.log("Mouse Over")}>Mouse Over</h1>
      {newArr.map((item, index) => (
        <button onClick={() => handleClick(item)} key={index}>
          Click button
        </button>
      ))}
      <UsernameInput />
    </>
  );
}

export default App;
