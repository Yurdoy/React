import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/services/fetchCategories";
import { NavLink } from "react-router-dom";
import cls from "../pages/CategoriesPages.module.css";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.category.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={cls.categories_page}>
      <hr />
      <h2 className={cls.categories_header}>Categories</h2>
      <div className={cls.categories_grid}>
        {allCategories.length > 0 &&
          allCategories.map((item) => (
            <NavLink to={`/categories/${item.id}`}>
              <div className={cls.grig_categories_card} key={item.id}>
                <img
                  src={`http://localhost:3333${item.image}`}
                  alt={item.title}
                />
                <h3 className={cls.grid_card_title}>{item.title}</h3>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
