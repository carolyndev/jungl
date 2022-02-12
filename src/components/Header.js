import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { checkSafariMobile } from '../helpers/functions';
import { ReactComponent as BagIcon } from '../images/svgs/bag.svg';
import { removeScrollBlock } from '../helpers/functions';

const Header = (props) => {
  const {
    cartItems,
    setCartItems,
    cartSideOpen,
    setCartSideOpen,
    toggleCartSide,
    numItems,
  } = props;

  const [navMenu, setNavMenu] = useState(false);

  useEffect(() => {
    if (!navMenu) {
      removeScrollBlock();
    }
  }, [navMenu]);

  // const hamburgerBtn = useRef(null);
  const toggleMenu = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      setNavMenu(!navMenu);
      checkSafariMobile();
      document.body.classList.add('open');
      document.documentElement.classList.add('open');
    } else return;
  };

  return (
    <header>
      <nav>
        <div
          // ref={hamburgerBtn}
          className={'hamburger ' + (navMenu ? 'open' : '')}
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          role="menu"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={'hamburger-menu ' + (navMenu ? 'open' : '')}>
          <ul className="menu-links menu-nav">
            <li>
              <Link to="/shop" onClick={toggleMenu} onKeyDown={toggleMenu}>
                Shop Plants
              </Link>
            </li>
            <li>
              <Link to="/tools" onClick={toggleMenu} onKeyDown={toggleMenu}>
                Care Tools & Accessories
              </Link>
            </li>
            <li>Gifts</li>
            <li>Subscription</li>
          </ul>
          <hr></hr>
          <ul className="menu-links menu-about">
            <li>Plant Guide</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="logo">
          <Link to="/">jungl</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/shop">Shop Plants</Link>
          </li>
          <li>
            <Link to="/tools">Care Tools</Link>
          </li>
          <li>Gifts</li>
          <li>Subscription</li>
        </ul>
        <div className="cart" onClick={toggleCartSide}>
          <span value={numItems}>{numItems}</span>
          <BagIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
