import logo from "../assets/icons-jobs/Cooljob.svg";

function Header() {
  return (
    <header>
      <div className="header-left">
        <div>
          <a href="#">
            <img src={logo} alt="Cooljob logo" />
          </a>
        </div>
        <ul className="nav">
          <li>Поиск работы</li>
          <li>Поиск стартапов</li>
        </ul>
      </div>
      <div className="header-enter">
        <a className="reg-btn" href="#">
          Регистрация
        </a>
        <a className="login-btn" href="#">
          Вход
        </a>
      </div>
    </header>
  );
}

export default Header;
