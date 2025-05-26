import React from "react";
import cls from "../footer/Footer.module.css";
import instaIcon from "../../../assets/images/ic-instagram.svg";
import whatsappIcon from "../../../assets/images/ic-whatsapp.svg";

const Footer = () => {
  return (
    <div className={cls.footer}>
      <h2>Contact</h2>
      <div className={cls.footer_grid_block}>
        <div className={cls.footer_contacts_social_address_hours}>
          <p className={cls.footer_paragraph_phone_address_social_hours}>
            Phone
          </p>
          <p className={cls.footer_paragraph_contact_text}>+49 30 915-88492</p>
        </div>
        <div className={cls.footer_contacts_social_address_hours}>
          <p className={cls.footer_paragraph_phone_address_social_hours}>
            Socials
          </p>
          <img
            className={cls.footer_paragraph_contact_insta_icons}
            src={instaIcon}
            alt="Instagram Icon"
          />
          <img
            className={cls.footer_paragraph_contact_wa_icons}
            src={whatsappIcon}
            alt="Whatsapp Icon"
          />
        </div>
        <div className={cls.footer_contacts_social_address_hours}>
          <p className={cls.footer_paragraph_phone_address_social_hours}>
            Address
          </p>
          <p className={cls.footer_paragraph_contact_text}>
            Wallstraẞe 9-13, 10179 Berlin, Deutschland
          </p>
        </div>
        <div className={cls.footer_contacts_social_address_hours}>
          <p className={cls.footer_paragraph_phone_address_social_hours}>
            Working Hours
          </p>
          <p className={cls.footer_paragraph_contact_text}>24 hours a day</p>
        </div>
      </div>
      <div className={cls.map_container}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2428.2333542305164!2d13.402032377218415!3d52.511115872058845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1748256744094!5m2!1sen!2sde"
          width="100%"
          height="300px"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
