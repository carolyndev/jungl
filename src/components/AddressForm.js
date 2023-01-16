import React from 'react';

const Address = (props) => {
  const { section, toggleBillingAddress } = props;

  return (
    <div className={'checkout-div checkout-' + section}>
      <h2>{section} Information</h2>

      {section === 'billing' && (
        <>
          <div className="address-check" onClick={toggleBillingAddress}>
            <input ty pe="checkbox" name="same-address" id="same-address" />
            <label htmlFor="same-address">Same as shipping address</label>
          </div>
        </>
      )}

      <div className={section + '-fields'}>
        <div className={section + '-name input-section'}>
          <div className="input-div">
            <label htmlFor={section + '-first'}>First name</label>
            <input
              type="text"
              name={section + '-first'}
              id={section + '-first'}
              placeholder="First name"
              required
            />
          </div>

          <div className="input-div">
            <label htmlFor={section + '-last'}>Last name</label>
            <input
              type="text"
              name={section + '-last'}
              id={section + '-last'}
              placeholder="Last name"
              required
            />
          </div>
        </div>

        <div className={section + '-address input-section'}>
          <div className="input-div">
            <label htmlFor={section + '-address1'}>Address</label>
            <input
              type="text"
              name={section + '-address1'}
              id={section + '-address1'}
              placeholder="Address line 1"
              required
            />
          </div>
        </div>

        <div className={section + '-address input-section'}>
          <div className="input-div">
            <label htmlFor={section + '-address2'}>Address 2</label>
            <input
              type="text"
              name={section + '-address2'}
              id={section + '-address2'}
              placeholder="Address line 2 (if applicable)"
            />
          </div>
        </div>

        <div className={section + '-postal input-section'}>
          <div className="input-div">
            <label htmlFor={section + '-city'}>City</label>
            <input
              type="text"
              name={section + '-city'}
              id={section + '-city'}
              placeholder="City"
              required
            />
          </div>

          <div className="input-div">
            <label htmlFor={section + '-state'}>State</label>
            <input
              type="text"
              name={section + '-state'}
              id={section + '-state'}
              placeholder="State"
              required
            />
          </div>

          <div className="input-div">
            <label htmlFor={section + '-zip'}>ZIP code</label>
            <input
              type="text"
              name={section + '-zip'}
              id={section + '-zip'}
              placeholder="ZIP"
              required
            />
          </div>
        </div>

        <div className={section + '-phone input-section'}>
          <div className="input-div">
            <label htmlFor={section + '-phone'}>Phone number</label>
            <input
              type="tel"
              name={section + '-phone'}
              id={section + '-phone'}
              placeholder="Phone number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
