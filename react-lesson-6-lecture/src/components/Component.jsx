import React, { useEffect } from "react";

function Component() {
  useEffect(() => {
    console.log("Component Updated");
  });
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default Component;
