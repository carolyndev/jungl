// import React from 'react';
import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info';
import Collection from './components/Collection';
import { collections, guides } from './helpers/data';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Collection category={collections} />
        <Info />
        <Collection category={guides} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
