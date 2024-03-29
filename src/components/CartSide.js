import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../images/svgs/close.svg';
import CartItem from './CartItem';
import { removeScrollBlock } from '../helpers/functions';

const CartSide = (props) => {
  const {
    cartSideOpen,
    setCartSideOpen,
    cartItems,
    setCartItems,
    toggleCartSide,
    closeCartSide,
    cartTotal,
    showMenus,
    setShowMenus,
  } = props;

  const cartRef = useRef(null);
  const cartSideRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(e.target) &&
      cartSideRef.current.contains(e.target)
    ) {
      console.log('close cart side');
      closeCartSide();
    }
  };

  return (
    <div
      ref={cartSideRef}
      className={'cart-sidebar-container ' + (cartSideOpen ? 'open' : '')}
    >
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
                showMenus={showMenus}
                setShowMenus={setShowMenus}
              />
            ))}
          </div>
        ) : (
          <div className="cart-empty">
            <h2>Your cart is currently empty.</h2>
            <p>Let's get you started!</p>
            <Link to="/shop" className="button-primary" onClick={closeCartSide}>
              Explore the jungl
            </Link>
          </div>
        )}

        <div className="cart-checkout">
          <p>
            Subtotal: <span>${cartTotal}</span>
          </p>
          <p className="cart-free-ship">
            Shipping and taxes calculated at checkout.
          </p>

          {cartItems.length > 0 ? (
            <>
              <Link
                to="/cart"
                onClick={closeCartSide}
                className="cart-view-details"
              >
                View cart details ⟶
              </Link>
              <Link
                to="/checkout"
                className="button-primary"
                onClick={closeCartSide}
              >
                Checkout
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSide;
