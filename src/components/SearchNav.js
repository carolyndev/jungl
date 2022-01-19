import React from 'react';
import { ReactComponent as CloseIcon } from '../images/svgs/close.svg';
import { ReactComponent as DownIcon } from '../images/svgs/down-arrow.svg';
import { filters } from '../helpers/data';

const SearchNav = (props) => {
  const { filterOpen, setFilterOpen, toggleFilterMenu } = props;

  const openFilterList = (e) => {
    e.target.nextElementSibling.classList.toggle('expand');
  };

  return (
    <>
      <div className={filterOpen ? 'filter-nav open' : 'filter-nav'}>
        <div className="filter-nav-header">
          <h2>Filter By:</h2>

          <button className="filterBtn" onClick={toggleFilterMenu}>
            <CloseIcon width="24px" height="24px" />
          </button>
        </div>
        <div className="filter-categories">
          {filters.map((filterType, idx) => (
            <div className="filter-type" key={idx}>
              <h3 className="filter-title" onClick={openFilterList}>
                {filterType.title}
                <DownIcon />
              </h3>

              <ul className="filter-list">
                {filterType.options.map((option, idx) => (
                  <li className="filter-option" key={idx}>
                    <input
                      type="checkbox"
                      name={`` + option[0] + idx}
                      id={`` + option[0] + idx}
                    />
                    <label htmlFor={`` + option[0] + idx}>{option}</label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="filter-confirm">
          <button className="confirm-btn">Clear Filters</button>
          <button className="confirm-btn">Apply Selected</button>
        </div>
      </div>
    </>
  );
};

export default SearchNav;
