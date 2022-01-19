import React from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Collection from '../components/Collection';
import { collections, guides } from '../helpers/data';

const Home = () => {
  return (
    <>
      <Hero />
      <Collection category={collections} mapStart={0} mapEnd={4} />
      <Info />
      <Collection category={guides} mapStart={0} mapEnd={4} />
    </>
  );
};

export default Home;
