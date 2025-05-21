import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/services/fetchCategories";
import { NavLink } from "react-router-dom";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.category.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      Categories Page
      {allCategories.length > 0 &&
        allCategories.map((item) => (
          <NavLink to={`/categories/${item.id}`}>
            <div key={item.id}>
              <img
                src={`http://localhost:3333${item.image}`}
                alt={item.title}
              />
              <h3>{item.title}</h3>
            </div>
          </NavLink>
        ))}
    </div>
  );
};

export default CategoriesPage;
