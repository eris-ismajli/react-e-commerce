import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";

const App = () => {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cartProducts={cartProducts} setCartProducts={setCartProducts}/>}
        />
      </Routes>
    </Router>
  );
};

export default App;
