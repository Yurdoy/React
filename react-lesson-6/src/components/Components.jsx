import { useEffect, useState } from "react";

function Components() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Hello");
  }, [count]);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Components;
