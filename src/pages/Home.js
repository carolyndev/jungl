import React from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Collection from '../components/Collection';
import { collections, guides } from '../helpers/data';

const Home = () => {
  return (
    <>
      <Hero />
      <Collection category={collections} />
      <Info />
      <Collection category={guides} />
    </>
  );
};

export default Home;
