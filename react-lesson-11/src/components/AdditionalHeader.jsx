import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdditionalHeader = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Contacts</Link>
        </li>
        <li>
          <NavLink to="/profile/S">Profile</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default AdditionalHeader;
