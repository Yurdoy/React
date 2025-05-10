import React from "react";
import "../styles/MainContent.css";
import appleLogo from "../assets/images/apple-icon.svg";
import appleLogoBlue from "../assets/images/apple-blue-icon.svg";
import googleLogo from "../assets/images/google-icon.svg";
import googleLogoBlue from "../assets/images/google-blue-icon.svg";
import twitterLogo from "../assets/images/twitter-icon.svg";
import twitterLogoBlue from "../assets/images/twitter-blue-icon.svg";

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
        <button className="google-btn" type="button">
          <img
            src={googleLogo}
            alt="Google Icon Green"
            className="google-icon default"
          />
          <img
            src={googleLogoBlue}
            alt="Google Icon Blue"
            className="google-icon hover"
          />
        </button>
        <button className="twitter-btn" type="button">
          <img
            src={twitterLogo}
            alt="Twitter Icon Green"
            className="twitter-icon default"
          />
          <img
            src={twitterLogoBlue}
            alt="Twitter Icon Blue"
            className="twitter-icon hover"
          />
        </button>
      </div>
    </main>
  );
};

export default MainContent;
