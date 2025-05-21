import { NavLink } from "react-router-dom";
import cls from "../Header/Header.module.css";
import logo from "../../../assets/images/logo.svg";
import basket from "../../../assets/images/basket=empty.svg";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const basketList = useSelector((state) => state.basket.basket);
  console.log(basketList);

  return (
    <div className="header">
      <nav style={cls}>
        <NavLink to="/">
          <div>
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
        <NavLink to="/">Main Page</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/all_products">All Product</NavLink>
        <NavLink to="/all_sales">All Sales</NavLink>
        <NavLink to="/basket">
          <div>
            <strong>{basketList.length}</strong>
            <img src={basket} alt="basket" />
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
