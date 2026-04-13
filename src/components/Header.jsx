import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({cartProducts}) => {
  const navigate = useNavigate()

  return (
    <header>
      <h2>E-Commerce</h2>

      <div className="cart">
        <h3>{cartProducts.length}</h3>
        <button onClick={() => navigate("/cart")}>Cart</button>
      </div>
    </header>
  );
};

export default Header;
