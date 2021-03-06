import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as PlantIcon } from '../images/svgs/plant.svg';

const Gallery = (props) => {
  const {
    plants,
    mapStart,
    mapEnd,
    plantGrid,
    sortedData,
    selected,
    setSelected,
    itemToAdd,
    setItemToAdd,
  } = props;

  return (
    <>
      {plants.length > 0 ? (
        <div
          className={
            plantGrid ? 'collection-items ' + plantGrid : 'collection-items'
          }
          id={sortedData && sortedData.url + 'Page'}
        >
          {plants.slice(mapStart, mapEnd).map((item, idx) => (
            <div className="collection-item" key={idx}>
              {item.price ? (
                <Link
                  to={'/item/' + item.featured}
                  onClick={() => {
                    setSelected(item);
                  }}
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className="collection-image"
                  />
                  <h3>{item.name}</h3>

                  {item.price.length > 1 ? (
                    <p>
                      ${item.price[0]} - ${item.price[item.price.length - 1]}
                    </p>
                  ) : (
                    <p>${item.price}</p>
                  )}
                  {item.new && <p className="new-item">NEW</p>}
                </Link>
              ) : (
                <Link
                  to={'/guide/' + item.route}
                  // onClick={() => setSelected(item)}
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className="collection-image"
                  />
                  {item.author && <p className="guide-author">{item.author}</p>}
                  <h3>{item.name}</h3>
                </Link>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="no-matches">
          <PlantIcon />
          <p>We couldn't find a match for your search.</p>

          <p>Try filtering for 'Air Purifying'!</p>
        </div>
      )}
    </>
  );
};

export default Gallery;
