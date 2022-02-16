import React from 'react';
import { ReactComponent as CloseIcon } from '../images/svgs/close.svg';
import { ReactComponent as DownIcon } from '../images/svgs/down-arrow.svg';
import { filters } from '../helpers/data';

const SearchNav = (props) => {
  const {
    filterOpen,
    toggleFilterMenu,
    sortedData,
    setSortedData,
    data,
    setData,
    selectedFilters,
    setSelectedFilters,
    desktopWidth,
    initialFilters,
  } = props;

  const toggleFilterList = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      e.target.nextElementSibling.classList.toggle('expand');
    }
  };

  const adjustFilters = (filterType, option) => {
    // console.log(filterType.title);
    // console.log(option);

    let optionIdx = filterType.options.indexOf(option);
    // console.log(optionIdx);

    let filterIdx = filters.indexOf(
      filters.filter((obj) => obj.title === filterType.title)[0]
    );

    let optionBool = selectedFilters[filterIdx].map((option, idx) =>
      idx === optionIdx ? !option : option
    );

    // console.log(filterIdx);
    // console.log(selectedFilters[filterIdx]);
    // console.log(selectedFilters[filterIdx][optionIdx]);

    setSelectedFilters(
      selectedFilters.map((filter, index) =>
        index === filterIdx ? optionBool : filter
      )
    );
  };

  const lessThan50 = data.items.filter((item) =>
    item.price.some((value) => value < 50)
  );
  const between50and99 = data.items.filter((item) =>
    item.price.some((value) => value > 49 && value < 100)
  );
  const between100and149 = data.items.filter((item) =>
    item.price.some((value) => value > 99 && value < 150)
  );
  const between150and199 = data.items.filter((item) =>
    item.price.some((value) => value > 149 && value < 200)
  );
  const greaterThan200 = data.items.filter((item) =>
    item.price.some((value) => value > 200)
  );

  const filterProducts = () => {
    let toDisplay = [];

    if (
      (selectedFilters[0].every((option) => option === true) &&
        selectedFilters[1].every((option) => option === true) &&
        selectedFilters[2].every((option) => option === true) &&
        selectedFilters[3].every((option) => option === true)) ||
      (selectedFilters[0].every((option) => option === false) &&
        selectedFilters[1].every((option) => option === false) &&
        selectedFilters[2].every((option) => option === false) &&
        selectedFilters[3].every((option) => option === false))
    ) {
      setSortedData(data);
    } else {
      if (selectedFilters[0].some((option) => option === true)) {
        if (selectedFilters[0][0]) {
          toDisplay.push(
            data.items.filter((item) =>
              item.tags.some((tag) => tag === 'easy maintenance')
            )
          );
        }
        if (selectedFilters[0][1]) {
          toDisplay.push(
            data.items.filter((item) =>
              item.tags.some((tag) => tag === 'air-purifying')
            )
          );
        }
        if (selectedFilters[0][2]) {
          toDisplay.push(
            data.items.filter((item) =>
              item.tags.some((tag) => tag === 'pet-friendly')
            )
          );
        }
        if (selectedFilters[0][3]) {
          toDisplay.push(
            data.items.filter((item) => item.tags.some((tag) => tag === 'tree'))
          );
        }
      } else console.log('no features selected');

      if (selectedFilters[1].some((option) => option === true)) {
        if (selectedFilters[1][0]) {
          toDisplay.push(
            data.items.filter((item) =>
              item.tags.some((tag) => tag === 'low light')
            )
          );
        }
        if (selectedFilters[1][1]) {
          toDisplay.push(
            data.items.filter((item) =>
              item.tags.some((tag) => tag === 'bright indirect')
            )
          );
        }
        if (selectedFilters[1][2]) {
          toDisplay.push(
            data.items.filter((item) =>
              item.tags.some((tag) => tag === 'full direct')
            )
          );
        }
      } else console.log('no light reqs selected');

      if (selectedFilters[2].some((option) => option === true)) {
        if (selectedFilters[2][0]) {
          toDisplay.push(lessThan50);
        }
        if (selectedFilters[2][1]) {
          toDisplay.push(between50and99);
        }
        if (selectedFilters[2][2]) {
          toDisplay.push(between100and149);
        }
        if (selectedFilters[2][3]) {
          toDisplay.push(between150and199);
        }
        if (selectedFilters[2][4]) {
          toDisplay.push(greaterThan200);
        }
      } else console.log('no prices selected');

      if (selectedFilters[3].some((option) => option === true)) {
        if (selectedFilters[3][0]) {
          toDisplay.push(
            data.items.filter((item) =>
              item.sizes.some((tag) => tag === 'X-Small')
            )
          );
        }
        if (selectedFilters[3][1]) {
          toDisplay.push(
            data.items.filter((item) =>
              item.sizes.some((tag) => tag === 'Small')
            )
          );
        }
        if (selectedFilters[3][2]) {
          toDisplay.push(
            data.items.filter((item) =>
              item.sizes.some((tag) => tag === 'Medium')
            )
          );
        }
        if (selectedFilters[3][3]) {
          toDisplay.push(
            data.items.filter((item) =>
              item.sizes.some((tag) => tag === 'Large')
            )
          );
        }
        if (selectedFilters[3][4]) {
          toDisplay.push(
            data.items.filter((item) =>
              item.sizes.some((tag) => tag === 'X-Large')
            )
          );
        }
      } else console.log('no sizes selected');

      let uniqueFiltered = [...new Set(toDisplay.flat())];
      console.log(toDisplay.flat());
      console.log(uniqueFiltered);
      setSortedData({ ...sortedData, items: uniqueFiltered });

      if (desktopWidth.matches) {
        toggleFilterMenu();
      }
    }
  };

  const clearFilters = () => {
    setSelectedFilters(initialFilters);
    setSortedData(data);
    if (desktopWidth.matches) {
      toggleFilterMenu();
    }
  };

  return (
    <>
      <div className={filterOpen ? 'filter-nav open' : 'filter-nav'}>
        <div className="filter-nav-header">
          <h2>Filter By:</h2>

          <button className="filter-closeBtn" onClick={toggleFilterMenu}>
            <CloseIcon width="24px" height="24px" />
          </button>
        </div>
        <div className="filter-categories">
          {window.location.pathname.includes('tools') ? (
            <div className="filter-type">
              <h3
                className="filter-title"
                tabIndex={0}
                onClick={toggleFilterList}
                onKeyDown={toggleFilterList}
              >
                {filters[2].title}
                <DownIcon />
              </h3>
              <ul className="filter-list expand">
                {filters[2].options.map((option, idx) => (
                  <li className="filter-option" key={idx}>
                    <label htmlFor={`` + filters[2].title + idx}>
                      <input
                        type="checkbox"
                        name={`` + filters[2].title + idx}
                        id={`` + filters[2].title + idx}
                        checked={selectedFilters[2][idx]}
                        onChange={() => adjustFilters(filters[2], option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            filters.map((filterType, idx) => (
              <div className="filter-type" key={idx}>
                <h3 className="filter-title" onClick={toggleFilterList}>
                  {filterType.title}
                  <DownIcon />
                </h3>

                <ul className="filter-list">
                  {filterType.options.map((option, idx) => (
                    <li className="filter-option" key={idx}>
                      <label htmlFor={`` + filterType.title + idx}>
                        <input
                          type="checkbox"
                          name={`` + filterType.title + idx}
                          id={`` + filterType.title + idx}
                          checked={
                            selectedFilters[
                              filters.indexOf(
                                filters.filter(
                                  (obj) => obj.title === filterType.title
                                )[0]
                              )
                            ][idx]
                          }
                          onChange={() => adjustFilters(filterType, option)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>

        <div className="filter-confirm">
          <button className="confirm-btn" onClick={clearFilters}>
            Clear Filters
          </button>
          <button className="confirm-btn" onClick={filterProducts}>
            Apply Selected
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchNav;
