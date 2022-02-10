import React, { useEffect } from 'react';

const CartPage = (props) => {
  const { cartItems, setCartItems } = props;

  return (
    <div className="cart-container">
      {cartItems.map((item, idx) => (
        <div key={idx}>
          <h1>{item.name}</h1>
          <p>Subtotal: ${item.unitPrice * item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
