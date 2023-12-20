import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import NavLink from '../Navlink/NavLink';
import Link from 'next/link';

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
      icon: <FontAwesomeIcon icon={faSearch} size="lg"/>,
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

  return (
    <header>
      <nav>
        <div className="flex justify-between items-center py-3 px-6">
          <Link id="logo" href="/" className="text-3xl">
            jungl
          </Link>

          {primaryNavLinks()}
          {secondaryNavLinks()}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
