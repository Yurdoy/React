import React, { useState } from "react";

function Text() {
  const [isTextVisible, setIsTextVisible] = useState(true);

  const toggleText = () => {
    setIsTextVisible((prevText) => !prevText);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {isTextVisible ? "hide" : "show"} text
      </button>
      {isTextVisible && <p>Hello World!</p>}
    </div>
  );
}

export default Text;
