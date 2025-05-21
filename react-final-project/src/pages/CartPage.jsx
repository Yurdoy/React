import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const CartPage = () => {
  const dispatch = useDispatch();
  const basketList = useSelector((state) => state.basket.basket);
  console.log(basketList);
  return (
    <div>
      Basket
      {basketList.map((item) => (
        <div>
          <h5>{item.name}</h5>
          <h6>{item.description}</h6>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
