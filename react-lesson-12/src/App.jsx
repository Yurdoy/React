import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@mui/material";
import { useState } from "react";
import SimpleInterface from "./components/SimpleInterface";
import IconExample from "./components/IconExample";
import ButtonIcon from "./components/ButtonIcon";
import UserForm from "./components/UserForm";

function App() {
  const [msg, setMsg] = useState(false);

  const clickHandler = () => {
    {
      setMsg(!msg);
    }
  };
  return (
    <>
      <div>
        {/* <SimpleInterface />
        <IconExample />
        <ButtonIcon />
        <Button variant="contained" onClick={clickHandler}>
          Click Me
        </Button>
        {msg && <p>На кнопку кликнули</p>} */}
        <UserForm />
      </div>
    </>
  );
}

export default App;
