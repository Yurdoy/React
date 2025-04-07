import { useEffect, useRef, useState } from "react";

function EscapeButton() {
  const buttonRef = useRef(null);

  const handleMouseMove = () => {
    const button = buttonRef.current;
    if (button) {
      const x = Math.random() * (window.innerWidth - button.offsetWidth);
      const y = Math.random() * (window.innerHeight - button.offsetHeight);
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
    }
  };
  return (
    <>
      <button
        ref={buttonRef}
        style={{ position: "absolute" }}
        onMouseMove={handleMouseMove}
        className="btn"
      >
        click
      </button>
    </>
  );
}

export default EscapeButton;
