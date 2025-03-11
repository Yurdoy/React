import { useEffect, useState } from "react";

function ColorChangeComponent() {
  const [colorValue, setColorValue] = useState("");
  const [color, setColor] = useState("white");
  useEffect(() => {
    if (colorValue.length >= 5) {
      setColor("red");
    } else {
      setColor("green");
    }
  }, [colorValue]);
  return (
    <div>
      <input
        type="text"
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
      <p style={{ background: color }}>{colorValue}</p>
    </div>
  );
}

export default ColorChangeComponent;
