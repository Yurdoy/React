import { useState } from "react";

function UsernameInput() {
  const [username, setUsername] = userState("");

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => console.log()}>Click</button>
    </div>
  );
}

export default UsernameInput;
