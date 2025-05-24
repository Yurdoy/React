import React from "react";
import cls from "../footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={cls.footer}>
      <h2>Contact</h2>
      <div className={cls.footer_contacts_social}>
        <div className={cls.footer_contacts_phone_address}>
          <p>Phone</p>
          <h4>+49 30 915-88492</h4>
        </div>
        <div className={cls.footer_contacts_social_hours}>
          <p>Socials</p>
          <h4>+49 30 915-88492</h4>
        </div>
        <div className={cls.footer_contacts_phone_address}>
          <p>Address</p>
          <h4>Wallstraẞe 9-13, 10179 Berlin, Deutschland</h4>
        </div>
        <div className={cls.footer_contacts_social_hours}>
          <p>Working Hours</p>
          <h4>24 hours a day</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
