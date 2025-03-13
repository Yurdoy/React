import { menuConfig } from "../menuConfig";
import ItemMenu from "./MenuItem";

function Menu() {
  return (
    <div>
      {menuConfig.map((item) => (
        <ItemMenu key={item.id} dish={item.dish} price={item.price} />
      ))}
    </div>
  );
}

export default Menu;
