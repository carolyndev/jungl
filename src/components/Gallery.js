import React from 'react';

const Gallery = (props) => {
  const { plants } = props;

  return (
    <div className="collection-items">
      {plants.map((item, idx) => (
        <div className="collection-item" key={idx}>
          <a href={'./product/' + item.id}>
            <img src={item.url} alt={item.name} className="collection-image" />
            {item.author && <p className="guide-author">{item.author}</p>}
            <h3>{item.name}</h3>
            {item.price && <p>{item.price}</p>}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
