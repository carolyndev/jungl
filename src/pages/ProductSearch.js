import React from 'react';

const ProductSearch = (props) => {
  const { category } = props;
  // console.log(category);

  return (
    <>
      <div className="category-banner">
        <h1>{category.title}</h1>
      </div>
    </>
  );
};

export default ProductSearch;
