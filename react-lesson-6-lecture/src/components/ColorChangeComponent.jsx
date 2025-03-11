import React, { useState, useEffect } from "react";

function ColorChangeComponent() {
  const [text, setText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    if (text.length < 5) {
      setBackgroundColor("lightblue");
    } else if (text.length < 10) {
      setBackgroundColor("lightgreen");
    } else {
      setBackgroundColor("salmon");
    }
  }, [text]);

  return (
    <div>
      <h1>Change background color depending on text length</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ backgroundColor }}
      />
    </div>
  );
}

export default ColorChangeComponent;
