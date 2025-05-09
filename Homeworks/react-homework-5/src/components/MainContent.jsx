import React from "react";
import "../styles/MainContent.css";
import appleLogo from "../assets/images/apple-icon.svg";
import appleLogoBlue from "../assets/images/apple-blue-icon.svg";
import googleLogo from "../assets/images/google-icon.svg";
import twitterLogo from "../assets/images/twitter-icon.svg";

const MainContent = () => {
  return (
    <main className="main-content">
      <h1>LIFE IS WASTED ON THE LIVING</h1>
      <p>Sign in</p>
      <p>with</p>
      <div className="apple__google__twitter--logos">
        <button className="apple-btn" type="button">
          <img
            src={appleLogo}
            alt="Apple Icon Green"
            className="apple-icon default"
          />
          <img
            src={appleLogoBlue}
            alt="Apple Icon Blue"
            className="apple-icon hover"
          />
        </button>
        <button className="google-btn" type="button"></button>
        <button className="twitter-btn" type="button"></button>
      </div>
    </main>
  );
};

export default MainContent;
