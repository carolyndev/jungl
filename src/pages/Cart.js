import React, { useEffect } from 'react';

const Cart = (props) => {
  const { cartItems, setCartItems } = props;

  useEffect(() => {
    getLocalCart();
  }, []);

  const getLocalCart = () => {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify({}));
    } else {
      let cartLocal = JSON.parse(localStorage.getItem('cart'));
      setCartItems(cartLocal);
    }
  };

  return (
    <div className="cart-container">
      {cartItems.map((item, idx) => (
        <div key={idx}>
          <h1>{item.name}</h1>
          <p>Subtotal: ${item.quantity * item.unitPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
