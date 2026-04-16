import React from "react";

const CartPage = ({ cartProducts, setCartProducts }) => {
  
  const removeFromCart = (index) => {
    const updatedCartProducts = cartProducts.filter((product, i) => i !== index)
    setCartProducts(updatedCartProducts)
  }

  return (
    <main>
      <section className="products-list">
        {cartProducts.map((product, index) => {
          return (
            <div key={index} className="product-container">
              <img src={product.image} alt={product.title} />
              <p>{product.category}</p>
              <h2>{product.title}</h2>
              <h3>{product.rating}</h3>
              <h2>${product.price}</h2>
              <button onClick={() => removeFromCart(index)}>Remove from cart</button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default CartPage;
