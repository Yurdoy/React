import React from "react";
import { NavLink } from "react-router-dom";
import cls from "../../layouts/main/Main.module.css";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../ui/CustomButton";

const Main = () => {
  const handleButtonClick = () => {};
  return (
    <div className={cls.main}>
      <NavLink to="/all_sales">
        <div>
          <h1>Amazing Discounts on Pets Products!</h1>
        </div>
        <div></div>
      </NavLink>
      <CustomButton
        buttonText="Check out"
        onHandleClick={handleButtonClick}
        style={{ backgroundColor: "#0D50FF" }}
        type="button"
      />
    </div>
  );
};

export default Main;
