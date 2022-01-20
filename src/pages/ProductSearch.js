import React, { useState, useEffect } from 'react';
import Select from '../components/Select';
import SearchNav from '../components/SearchNav';
import Gallery from '../components/Gallery';
import { checkSafariMobile } from '../helpers/functions';
import { guides } from '../helpers/data';

const ProductSearch = (props) => {
  const { category } = props;
  const desktopWidth = window.matchMedia('(max-width: 40rem)');

  const [filterOpen, setFilterOpen] = useState(false);
  const [mobileWidth] = useState(window.innerWidth < 640);
  const [data, setData] = useState(category);
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState('');

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
  }, []);

  // sort items on option select
  useEffect(() => {
    handleSort();
  }, [sortBy]);

  useEffect(() => {
    setData(category);
    setSortedData(category);
  }, [category]);

  const toggleFilterMenu = () => {
    setFilterOpen(!filterOpen);
    document.body.classList.toggle('open');
    document.documentElement.classList.toggle('open');
    checkSafariMobile();
  };

  const handleMenuClose = () => {
    if (desktopWidth.matches) return;
    setFilterOpen(false);
    document.body.classList.remove('open');
    document.documentElement.classList.remove('open');
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
        sortedData.items.sort((a, b) => a.price - b.price);
        setSortedData({ ...sortedData });
        break;
      case 'high':
        console.log('sorting by: HIGH');
        sortedData.items.sort((a, b) => b.price - a.price);
        setSortedData({ ...sortedData });
        break;
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
          />
        ) : (
          <></>
        )}

        <Gallery
          plants={sortedData.items}
          mapStart={0}
          mapEnd={sortedData.items.length}
          plantGrid={'plant-grid'}
          sortedData={sortedData}
          setSortedData={setSortedData}
        />
      </div>
    </div>
  );
};

export default ProductSearch;
