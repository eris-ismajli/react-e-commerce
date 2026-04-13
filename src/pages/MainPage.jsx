import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { intialProducts } from "../data/products";
import Header from "../components/Header";

const MainPage = ({ cartProducts, setCartProducts }) => {

  const navigate = useNavigate();

  const [products, setProducts] = useState(intialProducts);

  const addToCart = (newCartProduct) => {
    setCartProducts((prev) => [...prev, newCartProduct]);
  };

  return (
    <main>
      <Header cartProducts={cartProducts} />
      <section className="products-list">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-container">
              <img src={product.image} alt={product.title} />
              <p>{product.category}</p>
              <h2>{product.title}</h2>
              <h3>{product.rating}</h3>
              <h2>${product.price}</h2>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default MainPage;
