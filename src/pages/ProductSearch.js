import React, { useState, useEffect } from 'react';
import Select from '../components/Select';
import SearchNav from '../components/SearchNav';
import Gallery from '../components/Gallery';
import { checkSafariMobile, removeScrollBlock } from '../helpers/functions';
import { guides, filters } from '../helpers/data';

const ProductSearch = (props) => {
  const {
    category,
    selected,
    setSelected,
    itemToAdd,
    setItemToAdd,
    cartItems,
    setCartItems,
    cartSideOpen,
    setCartSideOpen,
  } = props;
  const desktopWidth = window.matchMedia('(max-width: 40rem)');

  const initialFilters = [
    [false, false, false, false],
    [false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];

  const [filterOpen, setFilterOpen] = useState(false);
  const [mobileWidth] = useState(window.innerWidth < 640);
  const [data, setData] = useState(category);
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState('');
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);

  // handle filter menu close
  useEffect(() => {
    window.addEventListener('resize', () => {
      handleMenuClose();
    });
    return window.removeEventListener('resize', () => {
      handleMenuClose();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileWidth]);

  // scroll top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(data);
    setData(category);
  }, []);

  // sort items on option select
  useEffect(() => {
    handleSort();
  }, [sortBy]);

  useEffect(() => {
    setData(category);
    setSortedData(category);
  }, [category]);

  // useEffect(() => {
  //   console.log(selectedFilters);
  //   if (
  //     selectedFilters.map((filter) =>
  //       filter.every((option) => option === false || option === true)
  //     )
  //   ) {
  //     setSortedData(data);
  //   }
  // }, [selectedFilters]);

  // useEffect(() => {
  //   if (
  //     selectedFilters.length === 0 ||
  //     (selectedFilters.includes('Under $50') &&
  //       selectedFilters.includes('$50 - $99') &&
  //       selectedFilters.includes('$100 - $149') &&
  //       selectedFilters.includes('$150 - $199') &&
  //       selectedFilters.includes('$200 and Above'))
  //   ) {
  //     setSortedData(data);
  //     return;
  //   }

  //   if (selectedFilters.length === 1) {
  //     if (selectedFilters.includes('Under $50')) {
  //       setSortedData({
  //         ...sortedData,
  //         items: [...lessThan50],
  //       });
  //       console.log('less than 50');
  //       return;
  //     }

  //     if (selectedFilters.includes('$50 - $99')) {
  //       setSortedData({
  //         ...sortedData,
  //         items: [...between50and99],
  //       });
  //       console.log('50-99');
  //       return;
  //     }

  //     if (selectedFilters.includes('$100 - $149')) {
  //       setSortedData({
  //         ...data,
  //         items: [...between100and149],
  //       });
  //       console.log('100-149 only');
  //       return;
  //     }
  //     if (selectedFilters.includes('$150 - $199')) {
  //       setSortedData({
  //         ...data,
  //         items: [...between150and199],
  //       });
  //       console.log('100-149 only');
  //       return;
  //     }
  //     if (selectedFilters.includes('$200 and Above')) {
  //       setSortedData({
  //         ...data,
  //         items: [...greaterThan200],
  //       });
  //       console.log('200+');
  //       return;
  //     }
  //   }

  //   if (selectedFilters.length === 2) {
  //     if (
  //       selectedFilters.includes('Under $50') &&
  //       selectedFilters.includes('$50 - $99')
  //     ) {
  //       setSortedData({
  //         ...sortedData,
  //         items: [...lessThan50, ...between50and99],
  //       });
  //       console.log('under 50, 50-100');
  //       return;
  //     }

  //     if (
  //       selectedFilters.includes('Under $50') &&
  //       selectedFilters.includes('$100 - $149')
  //     ) {
  //       setSortedData({
  //         ...sortedData,
  //         items: [...lessThan50, ...between100and149],
  //       });
  //       console.log('under 50, 100-150');
  //       return;
  //     }

  //     if (
  //       selectedFilters.includes('Under $50') &&
  //       selectedFilters.includes('$150 - $199')
  //     ) {
  //       setSortedData({
  //         ...sortedData,
  //         items: [...lessThan50, ...between150and199],
  //       });
  //       console.log('under 50, 150-199');
  //       return;
  //     }
  //     if (
  //       selectedFilters.includes('Under $50') &&
  //       selectedFilters.includes('$200 and Above')
  //     ) {
  //       setSortedData({
  //         ...sortedData,
  //         items: [...lessThan50, ...greaterThan200],
  //       });
  //       console.log('under 50, over 200');
  //       return;
  //     }
  //   }

  //   //  if (selectedFilters.includes('$150 - $199')) {
  //   //     setSortedData({
  //   //       ...data,
  //   //       items: data.items.filter(
  //   //         (item) =>
  //   //           (item.price[0] > 149 && item.price[0] < 200) ||
  //   //           (item.price[item.price.length - 1] > 149 &&
  //   //             item.price[item.price.length - 1] < 200)
  //   //       ),
  //   //     });
  //   //     console.log('150-199 only');
  //   //   } else if{
  //   //     setSortedData({
  //   //       ...data,
  //   //       items: data.items.filter(
  //   //         (item) =>
  //   //           item.price[0] > 200 || item.price[item.price.length - 1] > 200
  //   //       ),
  //   //     });
  //   //     console.log('$200 and Above');

  //   // } else if (
  //   //   selectedFilters.includes('Under $50') &&
  //   //   selectedFilters.includes('$100 - $149')
  //   // ) {
  //   //   setSortedData({
  //   //     ...data,
  //   //     items: [...lessThan50, ...between100and149],
  //   //   });
  //   // }
  //   //  else if (selectedFilters.length === 2) {
  //   //   if (
  //   //     selectedFilters.includes('Under $50') &&
  //   //     selectedFilters.includes('$50 - $99')
  //   //   ) {
  //   //     setSortedData({
  //   //       ...data,
  //   //       items: data.items.filter((item) => item.price[0] < 100),
  //   //     });
  //   //     console.log('display 0-99');
  //   //   } else if (
  //   //     selectedFilters.includes('Under $50') &&
  //   //     selectedFilters.includes('$100 - $149')
  //   //   ) {
  //   //     setSortedData({
  //   //       ...data,
  //   //       items: data.items.filter(
  //   //         (item) =>
  //   //           item.price[0] < 50 ||
  //   //           (item.price[0] > 99 && item.price[0] < 150) ||
  //   //           (item.price[item.price.length - 1] > 99 &&
  //   //             item.price[item.price.length - 1] < 150)
  //   //       ),
  //   //     });
  //   //     console.log('display 0-50, 100-149');
  //   //   } else if (
  //   //     selectedFilters.includes('Under $50') &&
  //   //     selectedFilters.includes('$150 - $199')
  //   //   ) {
  //   //     setSortedData({
  //   //       ...data,
  //   //       items: data.items.filter(
  //   //         (item) =>
  //   //           item.price[0] < 50 ||
  //   //           (item.price[0] > 149 && item.price[0] < 200) ||
  //   //           (item.price[item.price.length - 1] > 149 &&
  //   //             item.price[item.price.length - 1] < 200)
  //   //       ),
  //   //     });
  //   //     console.log('display 0-50, 150-200');
  //   //   } else if (
  //   //     selectedFilters.includes('Under $50') &&
  //   //     selectedFilters.includes('$200 and Above')
  //   //   ) {
  //   //     setSortedData({
  //   //       ...data,
  //   //       items: data.items.filter(
  //   //         (item) =>
  //   //           item.price[0] < 50 ||
  //   //           item.price[0] > 200 ||
  //   //           item.price[item.price.length - 1] > 200
  //   //       ),
  //   //     });
  //   //     console.log('display 0-50, 200+');
  //   //   }
  //   // }

  //   // if (
  //   //   selectedFilters.includes('Under $50') &&
  //   //   selectedFilters.includes('$50 - $99') &&
  //   //   selectedFilters.includes('$100 - $149') &&
  //   //   selectedFilters.includes('$150 - $199')
  //   // ) {
  //   //   setSortedData({
  //   //     ...data,
  //   //     items: data.items.filter((item) => item.price[0] < 200),
  //   //   });
  //   //   console.log('display 0-199');
  //   // } else if (
  //   //   selectedFilters.includes('Under $50') &&
  //   //   selectedFilters.includes('$50 - $99') &&
  //   //   selectedFilters.includes('$100 - $150')
  //   // ) {
  //   //   setSortedData({
  //   //     ...data,
  //   //     items: data.items.filter((item) => item.price[0] < 150),
  //   //   });
  //   //   console.log('display 0-149');
  //   // } else if (
  //   //   selectedFilters.includes('Under $50') &&
  //   //   selectedFilters.includes('$50 - $99')
  //   // ) {
  //   //   setSortedData({
  //   //     ...data,
  //   //     items: data.items.filter((item) => item.price[0] < 100),
  //   //   });
  //   //   console.log('display 0-99');
  //   // }
  // }, [selectedFilters]);

  const toggleFilterMenu = () => {
    setFilterOpen(!filterOpen);
    document.body.classList.toggle('open');
    document.documentElement.classList.toggle('open');
    checkSafariMobile();
  };

  const handleMenuClose = () => {
    if (desktopWidth.matches) return;
    setFilterOpen(false);
    setCartSideOpen(false);
    removeScrollBlock();
  };

  const handleSort = () => {
    switch (sortBy) {
      case 'featured':
        console.log('sorting by: FEATURED');
        sortedData.items.sort((a, b) => a.featured - b.featured);
        setSortedData({ ...sortedData });
        break;
      case 'newest':
        console.log('sorting by: NEW');
        sortedData.items.sort((a, b) => Number(b.new) - Number(a.new));
        setSortedData({ ...sortedData });
        break;
      case 'low':
        console.log('sorting by: LOW');
        sortedData.items.sort((a, b) => a.price[0] - b.price[0]);
        setSortedData({ ...sortedData });
        break;
      case 'high':
        console.log('sorting by: HIGH');
        sortedData.items.sort((a, b) => b.price[0] - a.price[0]);
        setSortedData({ ...sortedData });
        break;

      default:
        sortedData.items.sort((a, b) => a.featured - b.featured);
    }
  };

  return (
    <div className="category-container">
      <div className="category-banner">
        <div className="category-header">
          <h1>{data.title}</h1>
          {data !== guides[0] ? (
            <Select
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              toggleFilterMenu={toggleFilterMenu}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="category-content">
        {data !== guides[0] ? (
          <SearchNav
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
            toggleFilterMenu={toggleFilterMenu}
            sortedData={sortedData}
            setSortedData={setSortedData}
            data={data}
            setData={setData}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            desktopWidth={desktopWidth}
            initialFilters={initialFilters}
          />
        ) : (
          <></>
        )}

        <div className="category-display">
          <p className="display-qty">{sortedData.items.length} results</p>

          <Gallery
            plants={sortedData.items}
            mapStart={0}
            mapEnd={sortedData.items.length}
            plantGrid={'plant-grid'}
            sortedData={sortedData}
            setSortedData={setSortedData}
            selected={selected}
            setSelected={setSelected}
            itemToAdd={itemToAdd}
            setItemToAdd={setItemToAdd}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
