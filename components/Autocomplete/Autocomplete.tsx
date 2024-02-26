import Input from '@components/Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Link from 'next/link';

type option = {
  name: string;
  _id: string;
};

type Props = {
  options: option[];
  setSearch: (search: string) => void;
  isRedirectToProductPage?: boolean;
};
const Autocomplete = ({
  options,
  setSearch,
  isRedirectToProductPage = false,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const menuClasses =
    'absolute top-full right-0 min-w-full w-full py-2 rounded-b translate-y-[-3px] cursor-default';

  const getHref = (item: { name: string; _id: string }) => {
    const formattedName = item.name.toLowerCase().replace(/ /g, '-');
    return `/product/${formattedName}`;
  };

  const listItem = (item: option) => {
    return (
      <li key={item._id} className="px-2 my-1 hover:bg-grayscale-lightGray">
        {isRedirectToProductPage ? (
          <Link href={getHref(item)}>{item.name}</Link>
        ) : (
          item.name
        )}
      </li>
    );
  };

  return (
    <div className="relative border-primary-darkGreen z-50">
      <Input
        endAdornment={
          <button onClick={() => inputRef.current?.focus()}>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        }
        onChange={(event) => setSearch(event.target.value)}
        ref={inputRef}
      />
      {!!options.length && (
        <ul className={menuClasses}>{options.map((item) => listItem(item))}</ul>
      )}
    </div>
  );
};

export default Autocomplete;
