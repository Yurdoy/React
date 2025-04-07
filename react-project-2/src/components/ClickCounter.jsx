import { useState, useRef, useEffect } from "react";

function ClickCounter() {
  const [clickCount, setCount] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.color = "red";
      buttonRef.current.style.backgroundColor = "green";
      buttonRef.current.style.padding = 10;
    }
  }, []);

  const handleIncrease = () => {
    setCount(clickCount + 1);
  };

  const handleDecrease = () => {
    setCount(clickCount - 1);
  };

  return (
    <>
      <button onClick={handleIncrease} ref={buttonRef}>
        Increase
      </button>
      <button onClick={handleDecrease} ref={buttonRef}>
        Decrease
      </button>
      <p>{clickCount}</p>
    </>
  );
}

export default ClickCounter;
