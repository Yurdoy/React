import React from "react";

const CustomButton = ({ buttonText, onHandleClick, style = {}, ...rest }) => {
  const defaultStyle = {
    padding: "10px 20px",
    backgroundColor: "#0D50FF",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    outline: "none",
  };

  const combinedStyle = { ...defaultStyle, ...style };

  return (
    <button onClick={onHandleClick} style={combinedStyle} {...rest}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
