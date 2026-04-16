import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { intialProducts } from "../data/products";
import Header from "../components/Header";

import "../index.css"

const MainPage = ({ cartProducts, setCartProducts, products, setProducts }) => {
  const navigate = useNavigate();

  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    const filteredProducts = intialProducts.filter(
      (product) =>
        currentCategory === "All" || product.category === currentCategory,
    );
    setProducts(filteredProducts);
  }, [currentCategory]);

  const addToCart = (event, newCartProduct) => {
    event.stopPropagation();
    setCartProducts((prev) => [...prev, newCartProduct]);
  };

  const categories = [
    "All",
    "Bags",
    "Electronics",
    "Shoes",
    "Home & Kitchen",
    "Apparel",
    "Accessories",
    "Sports",
  ];

  const changeCategory = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  return (
    <main>
      <Header cartProducts={cartProducts} />

      <section>
        {categories.map((category, index) => {
          return (
            <button key={index} onClick={() => changeCategory(category)}>
              {category}
            </button>
          );
        })}
      </section>

      <section className="products-list">
        {products.map((product) => {
          return (
            <div
              onClick={() => navigate(`/product/${product.id}`)}
              key={product.id}
              className="product-container"
            >
              <img src={product.image} alt={product.title} />
              <p>{product.category}</p>
              <h2>{product.title}</h2>
              <h3>{product.rating}</h3>
              <h2>${product.price}</h2>
              <button onClick={(event) => addToCart(event, product)}>Add to Cart</button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default MainPage;
