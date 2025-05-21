import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const CategoryProducts = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3333/categories/${id}`
        );
        setCategoryData(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch category products");
        console.error("Error fetching category products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!categoryData) return <div>No data available</div>;

  return (
    <div>
      <h2>{categoryData.category.title}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {categoryData.data.map((product) => (
          <NavLink to={`/category/${id}/${product.id}`}>
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
              }}
            >
              <img
                src={`http://localhost:3333${product.image}`}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  {product.discount_price ? (
                    <>
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "grey",
                        }}
                      >
                        ${product.price}
                      </span>
                      <span style={{ color: "red", marginLeft: "10px" }}>
                        ${product.discount_price}
                      </span>
                    </>
                  ) : (
                    <span>${product.price}</span>
                  )}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
