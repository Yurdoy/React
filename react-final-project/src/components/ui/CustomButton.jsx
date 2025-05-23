import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CustomButton = ({
  buttonText,
  onHandleClick,
  to,
  style = {},
  ...rest
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease",
    transform: "scale(1)",
    boxShadow: "none",
    userSelect: "none",
  };

  const hoverStyle = {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  };

  const combinedStyle = {
    ...defaultStyle,
    ...(isHovered ? hoverStyle : {}),
    ...style,
  };

  const handleClick = (e) => {
    if (to) {
      navigate(to);
    } else if (onHandleClick) {
      onHandleClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={combinedStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
