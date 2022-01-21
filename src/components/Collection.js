import React from 'react';
import Gallery from './Gallery';
import { Link } from 'react-router-dom';

const Collection = (props) => {
  const { category, mapStart, mapEnd } = props;

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
              <Link to={collection.url} className="action-visible">
                {collection.action}
              </Link>
            </h2>
          </div>

          {collection.items && (
            <Gallery
              plants={collection.items}
              mapStart={mapStart}
              mapEnd={mapEnd}
            />
          )}

          {/* <Link
            to={
              collection.url === 'learn'
                ? './learn'
                : './shop/' + collection.url
            }
            className="mobile-visible"
          >
            {collection.action}
          </Link> */}
        </section>
      ))}
    </>
  );
};

export default Collection;
