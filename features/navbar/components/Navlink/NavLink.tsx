import Link from 'next/link';

type NavItem = {
  id: string;
  href: string;
  label: string;
};

const NavLink = ({ id, href, label }: NavItem) => {
  const linkClasses = 'font-bold';

  return (
    <li key={id}>
      <Link key={id} href={href} className={linkClasses}>
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
