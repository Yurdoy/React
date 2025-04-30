import React, { useEffect } from "react";
import cls from "./Main.module.css";
import axios from "axios";
import banner from "../../assets/Banner.svg";
import React, { useState } from "react";

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://mockapi.io/projects/67daf7d11fd9e43fe4730ef6"
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error receiving data");
      }
    };
    fetchProducts();
  }, []);
  return (
    <main className={cls.main}>
      <section className={cls.news}>
        <img src={banner} alt="banner" />
      </section>
      <h2>Sneakers</h2>
      <div className={cls.products}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </main>
  );
};

export default Main;
