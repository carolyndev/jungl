import React from 'react';
import { Link } from 'react-router-dom';

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
  );
};

export default Gallery;
