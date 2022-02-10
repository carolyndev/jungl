import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../images/svgs/close.svg';
import CartItem from './CartItem';

const CartSide = (props) => {
  const {
    cartSideOpen,
    setCartSideOpen,
    cartItems,
    setCartItems,
    toggleCartSide,
  } = props;

  let arr = [];

  cartItems.map((item) => {
    arr.push(item.quantity * item.unitPrice);
  });
  let cartTotal = arr.reduce((prev, a) => prev + a, 0);

  const cartRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      setCartSideOpen(false);
    }
  };

  return (
    <div className={'cart-sidebar-container ' + (cartSideOpen ? 'open' : '')}>
      <div
        ref={cartRef}
        className={'cart-sidebar ' + (cartSideOpen ? 'open' : '')}
      >
        <div className="cart-header">
          <h2>Cart</h2>
          <button onClick={toggleCartSide} className="cart-close">
            <CloseIcon />
          </button>
        </div>

        {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
          </div>
        ) : (
          <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Let's get you started</p>
            <Link to="./shop" className="button-primary">
              Browse All
            </Link>
          </div>
        )}

        <div className="cart-checkout">
          <p>
            Subtotal: <span>${cartTotal}</span>
          </p>
          <button className="add-to-cart">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartSide;
