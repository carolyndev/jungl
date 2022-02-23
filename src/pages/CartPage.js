import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { learn } from '../helpers/data';
import CartItem from '../components/CartItem';
import { ReactComponent as PlantIcon } from '../images/svgs/plant.svg';

const CartPage = (props) => {
  const {
    cartItems,
    setCartItems,
    closeCartSide,
    cartTotal,
    numItems,
    showMenus,
    setShowMenus,
  } = props;
  const subscribe = learn[1];

  return (
    <>
      <div className="cart-page-container">
        <div className="cart-page-header">
          <h1>Your Shopping Cart</h1>
        </div>
        <div
          className={
            'cart-page-content ' + (cartItems.length > 0 ? '' : 'full')
          }
        >
          <div
            className={
              'cart-page-items ' + (cartItems.length > 0 ? '' : 'full')
            }
          >
            {cartItems.length > 0 ? (
              <>
                <h2>{numItems} Items</h2>
                <div>
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
              </>
            ) : (
              <div className="cart-empty">
                <PlantIcon />
                <h2>Your cart is currently empty.</h2>
                <p>Let's get you started!</p>
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

          {cartItems.length > 0 && (
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
                        150 - cartTotal
                      } more to qualify for free standard shipping. `}
                  Taxes to be calculated at checkout.
                </p>

                <p>
                  Subtotal:{' '}
                  <span>${cartTotal > 149 ? cartTotal : cartTotal + 7}</span>
                </p>
              </div>

              <Link
                to="/checkout"
                className="button-primary"
                onClick={closeCartSide}
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
