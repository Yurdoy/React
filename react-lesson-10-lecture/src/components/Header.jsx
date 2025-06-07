import React from "react";
import styles from "../styles/Header.module.css";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <nav className={styles.nav}>
        <a className={styles.main} href="/link">
          Main
        </a>
        <a className={styles.music} href="/link">
          Music
        </a>
        <a className={styles.community} href="/link">
          Community
        </a>
        <a className={styles.friends} href="/link">
          Friends
        </a>
      </nav>
    </header>
  );
};

export default Header;
