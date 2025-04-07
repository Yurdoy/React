import React from "react";
import { useNavigate } from "react-router-dom";

const BtnNav = () => {
  const navigateHome = useNavigate();
  const handleHome = () => {
    navigateHome("/");
  };
  return (
    <div>
      <button onClick={handleHome}>Login</button>
    </div>
  );
};

export default BtnNav;
