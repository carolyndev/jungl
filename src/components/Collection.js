import React from 'react';
import Gallery from './Gallery';

const Collection = (props) => {
  const { category } = props;

  return (
    <>
      {category.map((collection, idx) => (
        <section className="section" key={idx}>
          <div className="section-info">
            {collection.subtitle && (
              <p className="section-subtitle">{collection.subtitle}</p>
            )}
            <h2 className="section-title">
              {collection.title}
              <a href="/" className="action-visible">
                {collection.action}
              </a>
            </h2>
          </div>

          {collection.items && <Gallery plants={collection.items} />}
          <a href="/" className="mobile-visible">
            {collection.action}
          </a>
        </section>
      ))}
    </>
  );
};

export default Collection;
