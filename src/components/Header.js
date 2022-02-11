import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { checkSafariMobile } from '../helpers/functions';
import { ReactComponent as BagIcon } from '../images/svgs/bag.svg';

const Header = (props) => {
  const {
    cartItems,
    setCartItems,
    cartSideOpen,
    setCartSideOpen,
    toggleCartSide,
    numItems,
  } = props;

  const hamburgerBtn = useRef(null);
  const toggleMenu = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      hamburgerBtn.current.classList.toggle('open');
      hamburgerBtn.current.nextElementSibling.classList.toggle('open');
      document.body.classList.toggle('open');
      document.documentElement.classList.toggle('open');
      checkSafariMobile();
    } else return;
  };

  return (
    <header>
      <nav>
        <div
          ref={hamburgerBtn}
          className="hamburger"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          role="menu"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hamburger-menu">
          <ul className="menu-links menu-nav">
            <li>
              <Link to="./shop" onClick={toggleMenu} onKeyDown={toggleMenu}>
                Shop Plants
              </Link>
            </li>
            <li>Care Tools & Accessories</li>
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
            <Link to="./shop">Shop Plants</Link>
          </li>
          <li>Care Tools</li>
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
