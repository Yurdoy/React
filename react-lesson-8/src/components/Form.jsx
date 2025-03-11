import { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    setInputValue(title);
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleClick}>Click</button>
      {inputValue && <div>{inputValue}</div>}
    </div>
  );
}

export default Form;
