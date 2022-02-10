import React from 'react';
import { ReactComponent as FilterIcon } from '../images/svgs/filter.svg';

const Select = (props) => {
  const { toggleFilterMenu, sortBy, setSortBy } = props;

  const changeSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="searchMenu">
      <select onChange={changeSort} defaultValue="featured">
        <option value="featured">Sort by Featured</option>
        <option value="newest">Sort by Newest</option>
        <option value="low">Sort by Price: Low to High</option>
        <option value="high">Sort by Price: High to Low</option>
      </select>
      <button className="filterBtn" onClick={toggleFilterMenu}>
        <FilterIcon />
      </button>
    </div>
  );
};

export default Select;
