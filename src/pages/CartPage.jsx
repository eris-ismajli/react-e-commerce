import React from "react";

const CartPage = ({ cartProducts }) => {
  return (
    <main>
      <section className="products-list">
        {cartProducts.map((product) => {
          return (
            <div key={product.id} className="product-container">
              <img src={product.image} alt={product.title} />
              <p>{product.category}</p>
              <h2>{product.title}</h2>
              <h3>{product.rating}</h3>
              <h2>${product.price}</h2>
              <button>Remove from cart</button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default CartPage;
