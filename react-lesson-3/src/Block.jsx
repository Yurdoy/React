import { useState } from "react";
import CustomItem2 from "./CustomItem2";

function Block() {
  let customItemCount = 0;
  const descriptionText = "desc text text text";
  const [state, setState] = useState(0);
  console.log(state);
  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>increase</button>
      <button onClick={() => setState(state - 1)}>decrease</button>
      {/* BLOCK
      <CustomItem2 item={customItemCount} description={descriptionText} /> */}
    </div>
  );
}

export default Block;
