import React from "react";

const CheckDiscount = ({ hasDiscount, handleClick }) => {
  return (
    <div>
      <p>{hasDiscount ? "Акция! Скидка 20%!" : "Обычная цена"}</p>
      <button onClick={handleClick}>Show Discount</button>
    </div>
  );
};

export default CheckDiscount;
