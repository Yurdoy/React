import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const linkStyle = ({isActive}) => ({
    color: isActive? '#FFFFFF' : '#FFFFFF80'
})
  return (
    <div>
      <nav>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/login" style={linkStyle}>
          Login
        </NavLink>
        <NavLink to="/register" style={linkStyle}>
          Register
        </NavLink>
        <NavLink to="/Profile" style={linkStyle}>
          Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
