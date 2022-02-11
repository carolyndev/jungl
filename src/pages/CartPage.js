import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { learn } from '../helpers/data';
import CartItem from '../components/CartItem';

const CartPage = (props) => {
  const { cartItems, setCartItems, closeCartSide, cartTotal, numItems } = props;
  const subscribe = learn[1];

  return (
    <>
      <div className="cart-page-container">
        <div className="cart-page-header">
          <h1>Your Shopping Cart</h1>
        </div>
        <div className="cart-page-content">
          <div className="cart-page-items">
            <h2>{numItems} Items</h2>
            {cartItems.length > 0 ? (
              <div>
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
                <Link
                  to="/shop"
                  className="button-primary"
                  onClick={closeCartSide}
                >
                  Browse All
                </Link>
              </div>
            )}
          </div>

          <div className="cart-page-checkout">
            <div className="cart-page-summary">
              <h2>Order Summary</h2>
              <p>
                Cart total: <span>${cartTotal}</span>
              </p>
              <p>
                Estimated shipping:
                <span>{cartTotal > 149 ? 'Free!' : '$7'}</span>
              </p>
              <p className="cart-free-ship">
                {cartTotal > 149
                  ? `You've qualified for free standard shipping. `
                  : `Spend $${
                      149 - cartTotal
                    } more to qualify for free standard shipping. `}
                Taxes to be calculated at checkout.
              </p>

              <p>
                Subtotal:{' '}
                <span>${cartTotal > 149 ? cartTotal : cartTotal + 7}</span>
              </p>
            </div>

            {cartItems.length > 0 ? (
              <Link
                to="/checkout"
                className="button-primary"
                onClick={closeCartSide}
              >
                Checkout
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
