import React from "react";
import cls from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { linkStyle } from "../utils/linkStyle.util";

const Header = () => {
  return (
    <header className={cls.header}>
      <h1>Sneaker store</h1>
      <nav className={cls.nav}>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/" style={linkStyle}>
          Cart
        </NavLink>
        <NavLink to="/" style={linkStyle}>
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
