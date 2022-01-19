import React, { useState, useEffect } from 'react';
import Select from '../components/Select';
import SearchNav from '../components/SearchNav';
import { collections } from '../helpers/data';
import Gallery from '../components/Gallery';

const ProductSearch = (props) => {
  const { category } = props;
  const [filterOpen, setFilterOpen] = useState(false);
  const [mobileWidth, setMobileWidth] = useState(window.innerWidth < 640);
  const desktopWidth = window.matchMedia('(max-width: 40rem)');

  useEffect(() => {
    window.addEventListener('resize', () => {
      handleMenuClose();
    });
    return window.removeEventListener('resize', () => {
      handleMenuClose();
    });
  }, [mobileWidth]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFilterMenu = () => {
    setFilterOpen(!filterOpen);
    document.body.classList.toggle('open');
    document.documentElement.classList.toggle('open');
  };

  const handleMenuClose = () => {
    if (desktopWidth.matches) return;
    console.log('close');
    setFilterOpen(false);
    document.body.classList.remove('open');
    document.documentElement.classList.remove('open');
  };

  return (
    <div className="category-container">
      <div className="category-banner">
        <div className="category-header">
          <h1>{category.title}</h1>
          <Select
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
            toggleFilterMenu={toggleFilterMenu}
          />
        </div>
      </div>

      <div className="category-content">
        <SearchNav
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          toggleFilterMenu={toggleFilterMenu}
        />

        <Gallery
          plants={category.items}
          mapStart={0}
          mapEnd={category.items.length}
          plantGrid={'plant-grid'}
        />
      </div>
    </div>
  );
};

export default ProductSearch;
