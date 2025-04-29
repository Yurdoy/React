// import logo from "../assets/icons-jobs/Cooljob.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <a href="#" className={styles.logo}>
          Cooljob
        </a>
        <a href="#" className={styles.find_job}>
          Поиск работы
        </a>
        <a href="#" className={styles.find_startup}>
          Поиск стартапов
        </a>
      </div>
      <div className={styles.header_right}>
        <a href="#" className={styles.reg}>
          Регистрация
        </a>
        <button className={styles.sign_button}>Вход</button>
      </div>
    </header>
  );
}

export default Header;
