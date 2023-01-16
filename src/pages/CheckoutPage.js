import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import AddressForm from '../components/AddressForm';
import { ReactComponent as PlantIcon } from '../images/svgs/plant.svg';

const CheckoutPage = (props) => {
  const {
    closeCartSide,
    setShowMenus,
    cartItems,
    setCartItems,
    numItems,
    cartTotal,
  } = props;

  const [addressSame, setAddressSame] = useState(false);

  useEffect(() => {
    setShowMenus(false);
  }, []);

  useEffect(() => {
    let billingFields = document.querySelector('.billing-fields');
    if (addressSame) {
      billingFields.style.display = 'none';
    } else {
      billingFields.style.display = 'block';
    }
  }, [addressSame]);

  const toggleBillingAddress = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      setAddressSame(!addressSame);
    } else return;
  };

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

          <AddressForm section="shipping" />
          <AddressForm
            section="billing"
            toggleBillingAddress={toggleBillingAddress}
          />
          <div className="checkout-payment">
            <div className="input-div input-section">
              <label htmlFor="payment-number">Card number</label>
              <input
                type="text"
                name="payment-number"
                id="payment-number"
                placeholder="Card number"
                required
              />
            </div>

            <div className="input-div input-section">
              <label htmlFor="payment-name">Name on card</label>
              <input
                type="text"
                name="payment-name"
                id="payment-name"
                placeholder="Name on card"
                required
              />
            </div>

            <div className="input-section">
              <div className="input-div">
                <label htmlFor="payment-expire">Expiration Date</label>
                <input
                  type="text"
                  name="payment-expire"
                  id="payment-expire"
                  placeholder="Expiration date MM/YY"
                  required
                />
              </div>
              <div className="input-div">
                <label htmlFor="payment-security">Security Code</label>
                <input
                  type="text"
                  name="payment-security"
                  id="payment-security"
                  placeholder="Security code"
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
