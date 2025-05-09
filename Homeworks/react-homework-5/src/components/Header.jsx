import React from "react";
import "../styles/Header.css";
import spotifyLogo from "../assets/images/spotify-logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={spotifyLogo} alt="spotify logo" />
    </header>
  );
};

export default Header;
