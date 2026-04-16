import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import { intialProducts } from "./data/products";

const App = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState(intialProducts);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              products={products}
              setProducts={setProducts}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              products={products}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
