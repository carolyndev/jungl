import React from 'react';

const Gallery = (props) => {
  const { plants, mapStart, mapEnd, plantGrid, sortedData } = props;
  return (
    <div
      className={
        plantGrid ? 'collection-items ' + plantGrid : 'collection-items'
      }
      id={sortedData && sortedData.url + 'Page'}
    >
      {plants.slice(mapStart, mapEnd).map((item, idx) => (
        <div className="collection-item" key={idx}>
          <a href={'./product/' + item.id}>
            <img src={item.url} alt={item.name} className="collection-image" />
            {item.author && <p className="guide-author">{item.author}</p>}
            <h3>{item.name}</h3>
            {item.price && <p>${item.price}</p>}
            {item.new && <p className="new-item">NEW</p>}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
