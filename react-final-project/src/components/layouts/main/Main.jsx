import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import cls from "../../layouts/main/Main.module.css";
import { fetchCategories } from "../../../store/services/fetchCategories";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../ui/CustomButton";

const Main = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.category.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
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
          <CustomButton
            buttonText={"All categories"}
            to="/categories"
            style={{ padding: "8px 16px", backgroundColor: "#28a745" }}
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
    </div>
  );
};

export default Main;
