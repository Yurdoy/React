import { useEffect, useRef, useState } from "react";
function ScrollBox() {
  const scrollRef = useRef("null");
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  return (
    <div>
      <div
        ref={scrollRef}
        style={{
          width: "300px",
          height: "200px",
          overflowY: "scroll",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        {Array.from({ length: 50 }, (_, index) => (
          <p key={index}>Строка: {index + 1}</p>
        ))}
      </div>
      <button onClick={scrollToBottom}>Click</button>
    </div>
  );
}
export default ScrollBox;
