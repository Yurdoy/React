import logo from "../assets/logo.svg";

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-content__right">
          <a href="">БЛОГ</a>
          <a href="">О НАС</a>
          <a href="">МАГАЗИН</a>
          <a href="">СОЗДАТЕЛИ</a>
          <a href="">АВТОРИЗАЦИЯ</a>
        </div>
      </header>
    </>
  );
}

export default Header;
