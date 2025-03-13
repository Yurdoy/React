const ItemMenu = ({ dish, price }) => {
  return (
    <div>
      <p>
        <strong>Dish Name: </strong>
        {dish}
      </p>
      <p>
        <strong>Price: </strong>
        {price}
      </p>
    </div>
  );
};

export default ItemMenu;
