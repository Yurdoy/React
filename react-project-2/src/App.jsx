import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import EscapeButton from "./components/EscapeButton";
import ScrollBox from "./components/ScrollBox";
import ActiveClass from "./components/ActiveClass";
import AutoFocusForm from "./components/AutoFocusForm";
import TimerComponent from "./components/TimerComponent";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <ClickCounter />
      <EscapeButton />
      <ScrollBox />
      <ActiveClass />
      <AutoFocusForm />
      <TimerComponent />
      <Modal />
    </>
  );
}

export default App;
