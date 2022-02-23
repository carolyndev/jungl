import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { ReactComponent as PlantIcon } from '../images/svgs/plant.svg';

const CheckoutPage = (props) => {
  const {
    closeCartSide,
    showMenus,
    setShowMenus,
    cartItems,
    setCartItems,
    numItems,
    cartTotal,
  } = props;

  useEffect(() => {
    setShowMenus(false);
  }, []);

  return (
    <div className="checkout-container">
      <div className="checkout-progress">
        <ul>
          <li>
            <Link to="/cart">cart</Link> <span>⟶</span>
          </li>
          <li>
            checkout <span>⟶</span>
          </li>
          <li>success</li>
        </ul>
      </div>
      <div className="checkout-content">
        <div className="checkout-details">
          <div className="checkout-items checkout-section">
            {cartItems.length > 0 ? (
              <>
                <h2>
                  Cart Summary{' '}
                  <span>
                    {numItems} item{cartItems.length > 1 ? 's' : ''}
                  </span>
                </h2>
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

          <div className="checkout-div">
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
          </div>
        </div>

        <div className="checkout-user">
          <div className="checkout-contact checkout-div">
            <h2>Contact Information</h2>
            <div className="input-div">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                name="contact-email"
                id="contact-email"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="checkout-shipping checkout-div">
            <h2>Shipping Information</h2>

            <div className="contact-name input-section">
              <div className="input-div">
                <label htmlFor="contact-first">First name</label>
                <input
                  type="text"
                  name="contact-first"
                  id="contact-first"
                  placeholder="First name"
                  required
                />
              </div>

              <div className="input-div">
                <label htmlFor="contact-last">Last name</label>
                <input
                  type="text"
                  name="contact-last"
                  id="contact-last"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div className="contact-address input-section">
              <div className="input-div">
                <label htmlFor="contact-address1">Address</label>
                <input
                  type="text"
                  name="contact-address1"
                  id="contact-address1"
                  placeholder="Address line 1"
                  required
                />
              </div>
            </div>

            <div className="contact-address input-section">
              <div className="input-div">
                <label htmlFor="contact-address2">Address 2</label>
                <input
                  type="text"
                  name="contact-address2"
                  id="contact-address2"
                  placeholder="Address line 2 (if applicable)"
                />
              </div>
            </div>

            <div className="contact-postal input-section">
              <div className="input-div">
                <label htmlFor="contact-city">City</label>
                <input
                  type="text"
                  name="contact-city"
                  id="contact-city"
                  placeholder="City"
                  required
                />
              </div>

              <div className="input-div">
                <label htmlFor="contact-state">State</label>
                <input
                  type="text"
                  name="contact-state"
                  id="contact-state"
                  placeholder="State"
                  required
                />
              </div>

              <div className="input-div">
                <label htmlFor="contact-zip">ZIP code</label>
                <input
                  type="text"
                  name="contact-zip"
                  id="contact-zip"
                  placeholder="ZIP"
                  required
                />
              </div>
            </div>

            <div className="input-div">
              <div className="contact-number input-section">
                <label htmlFor="contact-phone">Phone number</label>
                <input
                  type="tel"
                  name="contact-phone"
                  id="contact-phone"
                  placeholder="Phone number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>
            </div>
          </div>

          <div className="checkout-payment checkout-div">
            <h2>Payment Information</h2>

            <div className="payment-name input-section">
              <div className="input-div">
                <label htmlFor="contact-first">First name</label>
                <input
                  type="text"
                  name="contact-first"
                  id="contact-first"
                  placeholder="First name"
                  required
                />
              </div>
            </div>
          </div>

          <div className="checkout-confirm">
            <Link to="/cart" className="return-to-cart" tabIndex={0}>
              ⟵ Return to cart
            </Link>
            <Link
              to="/checkout"
              className="button-primary"
              onClick={closeCartSide}
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
