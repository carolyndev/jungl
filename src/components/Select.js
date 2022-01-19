import React from 'react';
import { ReactComponent as FilterIcon } from '../images/svgs/filter.svg';
import { toggleFilterMenu } from '../helpers/functions';

const Select = (props) => {
  const { filterOpen, setFilterOpen, toggleFilterMenu } = props;

  return (
    <div className="searchMenu">
      <select>
        <option>Sort by Featured</option>
        <option>Sort by Newest</option>
        <option>Sort by Price: Low to High</option>
        <option>Sort by Price: High to Low</option>
      </select>
      <button className="filterBtn" onClick={toggleFilterMenu}>
        <FilterIcon />
      </button>
    </div>
  );
};

export default Select;
