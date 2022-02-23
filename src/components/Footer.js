import React from 'react';
import { footerLinks } from '../helpers/data';
import { toggleFooterList } from '../helpers/functions';

const Footer = (props) => {
  const { showMenus, setShowMenus } = props;
  return (
    <footer className={!showMenus ? 'footer-checkout' : ''}>
      {!window.location.pathname.includes('checkout') ? (
        <div className="footer-content">
          <div className="footer-newsletter">
            <label htmlFor="signup">STAY IN THE KNOW</label>
            <p>
              Sign up for new arrivals, special offers, and event invites
              delivered straight to you.
            </p>
            <div>
              <input
                type="email"
                name="signup"
                placeholder="Enter your email"
              />
              <button className="button-primary">Subscribe</button>
            </div>
          </div>

          <div className="footer-inner">
            {footerLinks.map((type, idx) => (
              <div className={'footer-' + type.title} key={idx}>
                <div
                  className="footer-header"
                  onClick={toggleFooterList}
                  onKeyDown={toggleFooterList}
                  role="button"
                  tabIndex={0}
                >
                  <h4 className="footer-title">{type.title}</h4>
                  <div className="footer-btn">+</div>
                </div>

                <ul className="footer-list">
                  {type.links.map((link, idx) => (
                    <button key={idx}>
                      <li>{link}</li>
                    </button>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="footer-logo logo footer-checkout">
        jungl
        <span>Copyright 2022 jungl</span>
      </div>
    </footer>
  );
};

export default Footer;
