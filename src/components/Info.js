import React from 'react';
import { learn } from '../helpers/data';

const Info = () => {
  return (
    <>
      {learn.map((item, idx) => (
        <section
          className={'section section-learn section-' + item.type}
          key={idx}
        >
          {item.url && <img src={item.url} alt={item.title} />}
          <div className="section-info">
            <p className="section-subtitle">{item.subtitle}</p>
            <h2 className="section-title">{item.title}</h2>

            <p className="section-text">{item.description}</p>

            <a href="/" className="button-primary" tabIndex={0}>
              {item.action}
            </a>
          </div>
        </section>
      ))}
    </>
  );
};

export default Info;
