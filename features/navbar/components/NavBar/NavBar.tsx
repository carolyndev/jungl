import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import NavLink from '../Navlink/NavLink';
import Link from 'next/link';
import Input from '../../../../components/Input/Input';
import { useRef } from 'react';

const NavBar = () => {
  const primaryNavItems = [
    {
      href: '/shop',
      id: 'shop',
      label: 'Shop Plants',
    },
    {
      href: '/tools',
      id: 'tools',
      label: 'Care Tools',
    },
    {
      href: '/gift',
      id: 'gift',
      label: 'Gift Ideas',
    },
    {
      href: '/corporate-gifting',
      id: 'corporate',
      label: 'Corporate Gifting',
    },
  ];

  const secondaryNavItems = [
    {
      icon: <FontAwesomeIcon icon={faSearch} size="lg" />,
      id: 'search',
      onClick: () => console.log('search!'),
    },
    {
      icon: <FontAwesomeIcon icon={faBagShopping} size="lg" />,
      id: 'shopping-bag',
      onClick: () => console.log('cart!'),
    },
  ];

  const primaryNavLinks = () => {
    return (
      <ul className="flex gap-4">
        {primaryNavItems.map((navItem) => (
          <NavLink key={navItem.id} {...navItem} />
        ))}
      </ul>
    );
  };

  const secondaryNavLinks = () => {
    return (
      <ul className="flex gap-4">
        {secondaryNavItems.map((item) => {
          return (
            <li key={item.id} onClick={item.onClick}>
              <button type="button">{item.icon}</button>
            </li>
          );
        })}
      </ul>
    );
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const searchInput = () => {
    return (
      <Input
        endAdornment={
          <button onClick={(event) => inputRef.current?.focus()}>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        }
        ref={inputRef}
      />
    );
  };
  return (
    <header>
      <nav>
        <div className="flex justify-between items-center py-3 px-6">
          <Link id="logo" href="/" className="text-3xl">
            jungl
          </Link>

          {primaryNavLinks()}

          <div className="flex gap-3">
            {searchInput()}
            <button onClick={() => console.log('iopen cart!!')}>
              <FontAwesomeIcon icon={faBagShopping} size="lg" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
