import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cls from "../../layouts/main/Main.module.css";
import { fetchCategories } from "../../../store/services/fetchCategories";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../ui/CustomButton";
import { useForm } from "react-hook-form";
import axios from "axios";
import saleBanner from "../../../assets/images/sale-banner.svg";

const Main = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.category.category);
  const [discountedProducts, setDiscountedProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
    fetchDiscountedProducts();
  }, [dispatch]);

  const fetchDiscountedProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3333/products/all");
      const products = response.data;
      const discounted = products.filter(
        (product) => product.discount_price !== null
      );
      const randomProducts = discounted
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
      setDiscountedProducts(randomProducts);
    } catch (error) {
      console.error("Error while receiving products with discount", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3333/sale/send",
        data
      );
    } catch (error) {
      console.error("Error while sending data", error);
    }
  };

  return (
    <div className={cls.main}>
      <NavLink to="/all_sales">
        <div className={cls.background_img_main_top}>
          <h1>Amazing Discounts on Pets Products!</h1>
          <CustomButton
            buttonText="Check out"
            to="/all_sales"
            style={{
              backgroundColor: "#0D50FF",
              marginLeft: "40px",
              padding: "16px 56px 16px 56px",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "130%",
            }}
            type="button"
          />
        </div>
      </NavLink>
      <div className={cls.categories_section}>
        <div className={cls.categories_section_upper_title_btn}>
          <h2>Categories</h2>
          <hr />
          <CustomButton
            buttonText={"All categories"}
            to="/categories"
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "white",
              color: "#DDDDDD",
              border: "1px solid #DDDDDD",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "126%",
            }}
            type="button"
          />
        </div>
      </div>
      <div className={cls.categories_list}>
        {allCategories.slice(0, 4).map((item) => (
          <NavLink
            to={`/categories/${item.id}`}
            key={item.id}
            className={cls.category_card}
          >
            <img
              src={`http://localhost:3333${item.image}`}
              alt={item.title}
              className={cls.category_image}
            />
            <h3>{item.title}</h3>
          </NavLink>
        ))}
      </div>
      <div className={cls.discount_section}>
        <h2>5% off on the first order</h2>
        <div className={cls.discount_section_img_form}>
          <img src={saleBanner} alt="Picture of animals" />
          <form className={cls.discount_form} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name"></label>
              <input
                id="name"
                {...register("name", { required: "Name is compulsory" })}
                placeholder="Name"
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="tel"></label>
              <input
                id="tel"
                type="tel"
                {...register("tel", {
                  required: "Phone number is compulsory",
                })}
                placeholder="Phone number"
              />
              {errors.tel && <p>{errors.tel.message}</p>}
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is compulsory" })}
                placeholder="Email"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <CustomButton
              buttonText={"Get a discount"}
              type="submit"
              style={{
                width: "407px",
                padding: "12px 20px",
                marginTop: "10px",
                backgroundColor: "#FFFFFF",
                color: "#282828",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "130%",
              }}
            />
          </form>
        </div>
      </div>
      <div className={cls.sale_section}>
        <div className={cls.sale_section_upper_title_btn}>
          <h2>Sale</h2>
          <hr />
          <CustomButton
            buttonText={"All sales"}
            to="/discount"
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "white",
              color: "#DDDDDD",
              border: "1px solid #DDDDDD",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "126%",
            }}
            type="button"
          />
        </div>
        <div className={cls.sale_products_list}>
          {discountedProducts.map((product) => (
            <NavLink
              to={`/product/${product.id}`}
              key={product.id}
              className={cls.product_card}
            >
              <img
                src={`http://localhost:3333${product.image}`}
                alt={product.title}
                className={cls.product_image}
              />
              <h3>{product.title}</h3>
              <p>Price: {product.price} $</p>
              <div className={cls.discount_tag}>-{product.discount_price}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
