import { useState } from "react";
// import CustomItem2 from "./CustomItem2";

function Block(props) {
  //state- базовое состояние, setState - функция, которая используется для изменения состояния
  const [state, setState] = useState(0);
  console.log(state);

  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>increase</button>
      {/* создать кнопку по клику на которую будем отнимать - 1 от нашего состояния state */}
      <button onClick={() => setState(state - 1)}>decrease</button>
    </div>
  );
}

export default Block;
