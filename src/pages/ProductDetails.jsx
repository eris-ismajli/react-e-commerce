import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const ProductDetails = ({ products, cartProducts, setCartProducts }) => {
  const params = useParams();

  const { id } = params;
  const product = products.find((p) => p.id == id);

  const addToCart = () => {
    setCartProducts((prev) => [...prev, product]);
  };

  return (
    <div>
      <Header cartProducts={cartProducts} />

      <h1>Product Details</h1>

      <img style={{ width: "250px" }} src={product.image} alt="" />
      <p>{product.category}</p>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>Rating: {product.rating}</h3>
      <h2>${product.price}</h2>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
