import { useState } from "react";

function Test() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      {isShow && <div>Hello World</div>}
      <button onClick={() => setIsShow(true)}>Click</button>
    </div>
  );
}

export default Test;
