import { NavLink } from "react-router-dom";
import cls from "../../layouts/header/Header.module.css";
import logo from "../../../assets/images/logo.svg";
import basket from "../../../assets/images/basket=empty.svg";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const basketList = useSelector((state) => state.basket.basket);
  console.log(basketList);

  return (
    <div className={cls.header}>
      <NavLink to="/">
        <div>
          <img className={cls.logo} src={logo} alt="logo" />
        </div>
      </NavLink>
      <nav className={cls.nav}>
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/all_products">All Product</NavLink>
        <NavLink to="/all_sales">All Sales</NavLink>
      </nav>
      <NavLink to="/basket">
        <div className={cls.basket}>
          <strong>{basketList.length}</strong>
          <img src={basket} alt="basket" />
        </div>
      </NavLink>
    </div>
  );
};

export default Header;
