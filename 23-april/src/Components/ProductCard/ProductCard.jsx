import React from 'react';
import cls from './ProductCard.module.css'
import { useCart } from '../Cart/CartProvider';



const ProductCard = ({product}) => {
    const {addToCart} = useCart()

    const handleAddToCart = () => {
        addToCart(product)
    }
  return (
    <div className={cls.card}>
      <img className={cls.image} src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className={cls.card__bottom}>
        <div>
            <p>Price: </p>
            <p className={cls.price}>{product.price}€</p>
        </div>
        <button onClick={handleAddToCart} className={cls.btn}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;