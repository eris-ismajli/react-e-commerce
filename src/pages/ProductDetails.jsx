import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const ProductDetails = ({ products, cartProducts, setCartProducts }) => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const product = products.find((p) => p.id == id);

  const addToCart = () => {
    setCartProducts((prev) => [...prev, product]);
  };

  if (!product) {
    return (
      <div className="product-details">
        <Header cartProducts={cartProducts} />
        <div className="product-not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details">
      <Header cartProducts={cartProducts} />

      <h1>Product Details</h1>

      <div className="product-details-content">
        <div className="product-details-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-details-info">
          <span className="product-details-category">{product.category}</span>
          <h2 className="product-details-title">{product.title}</h2>
          <p className="product-details-description">{product.description}</p>
          <div className="product-details-rating">
            <span>★ {product.rating}</span>
          </div>
          <div className="product-details-price">${product.price}</div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;