import React from "react";
import { useDispatch } from "react-redux";
import { addItemToBasket, increaseValue } from "../store/slices/basketSlice";

const AllProductsPage = () => {
  const dispatch = useDispatch();

  const addToBasket = () => {
    const newObj = {
      id: Date.now(),
      name: "Item 1",
      description: "item description",
    };

    dispatch(addItemToBasket(newObj));
  };

  return (
    <div>
      All Products
      <button onClick={() => dispatch(increaseValue())}>Add to cart</button>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default AllProductsPage;
