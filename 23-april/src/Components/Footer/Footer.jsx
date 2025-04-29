import React from 'react';
import cls from './Footer.module.css'
import { NavLink } from 'react-router-dom';
import img from '../../assets/Group 25.svg'
const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div>
        <p className={cls.footer__contacts}>Contacts</p>
        <div className={cls.footer__number}>
            8 800 555 35 35<br/>
            emailexample@email.com
        </div>
        <div>
            2025 Sneaker store. All rights reserved
        </div>
      </div>
      <div className={cls.footerRight}>
        <div className={cls.footer__icons}>
            <NavLink to='https://instagram.com'>
            <img src={img} alt="image" />
            </NavLink>
            <NavLink to='https://instagram.com'>
            X 
            </NavLink>
            <NavLink to='https://instagram.com'>
            IG
            </NavLink>
        </div>
        <input type="text" placeholder='insert your email'/>
      </div>
    </footer>
  );
};

export default Footer;