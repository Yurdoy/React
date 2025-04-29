import React from "react";
import cls from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import img from "../../assets/images/Facebook-icon.svg";
import img1 from "../../assets/images/Twitter-icon.svg";
import img2 from "../../assets/images/Instagram-icon.svg";

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div>
        <p className={cls.footer__contacts}>Contacts</p>
        <div className={cls.footer__number}>
          8 800 555 35
          <br />
          emailexample@mail.com
        </div>
        <div>2025 Sneaker store. All rights reserved.</div>
      </div>
      <div className={cls.footerRight}>
        <div className={cls.footer__icons}>
          <NavLink to="https://instagram.com">
            <img src={img} alt="image-icon" />
          </NavLink>
          <NavLink to="https://instagram.com">
            <img src={img1} alt="image-icon" />
          </NavLink>
          <NavLink to="https://instagram.com">
            <img src={img2} alt="image-icon" />
          </NavLink>
          <input type="text" placeholder="insert your email" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
