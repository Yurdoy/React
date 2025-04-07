import logo from "../assets/layer1.svg";

function Header() {
  return (
    <header>
      <img className="logoImg" src={logo}></img>
      <div className="headerButtons">
        <h2>Главная</h2>
        <h2>Музыка</h2>
        <h2>Сообщества</h2>
        <h2>Друзья</h2>
      </div>
    </header>
  );
}

export default Header;
