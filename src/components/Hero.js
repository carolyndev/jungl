import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Welcome to the <span>jungl</span>
        </h1>
        <p>Embracing the lush life, one plant at a time.</p>
        <a href="./product/" className="button-primary">
          Shop Plants
        </a>
      </div>
      <div className="hero-img">
        <img
          src="https://images.unsplash.com/photo-1522444501378-94cddd292428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="interior"
        />
      </div>
    </div>
  );
};

export default Hero;
