import { useEffect, useRef, useState } from "react";

function TimerComponent() {
  const timeRef = useRef(null);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const startTimer = () => {
      timeRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    };
    startTimer();
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  const stopTimer = () => {
    clearInterval(timeRef.current);
  };

  return (
    <>
      <div>
        <h2>Passed: {seconds} seconds</h2>
        <button onClick={stopTimer}>Stop timer</button>
      </div>
    </>
  );
}

export default TimerComponent;
