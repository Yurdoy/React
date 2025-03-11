import React, { useState, useEffect } from "react";

function DualEffectComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`Text has changed to: ${text}`);
  }, [text]);

  return (
    <div>
      <h1>Learning useEffect</h1>
      <div>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
      <div>
        <p>Text: {text}</p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default DualEffectComponent;
