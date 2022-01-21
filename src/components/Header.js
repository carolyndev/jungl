import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { checkSafariMobile } from '../helpers/functions';

const Header = () => {
  const hamburgerBtn = useRef(null);

  const closeMenu = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      console.log(hamburgerBtn.current);
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
          onClick={closeMenu}
          onKeyDown={closeMenu}
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
              <Link to="./shop" onClick={closeMenu} onKeyDown={closeMenu}>
                Shop Plants
              </Link>
            </li>
            <li>Subscription</li>
            <li>Care Tools & Accessories</li>
            <li>Gifts</li>
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
          <li>Subscription</li>
          <li>Care Tools</li>
          <li>Gifts</li>
        </ul>
        <div className="cart">
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
