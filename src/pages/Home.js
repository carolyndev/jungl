import React from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Collection from '../components/Collection';
import { collections, guides } from '../helpers/data';

const Home = (props) => {
  const { selected, setSelected } = props;

  return (
    <>
      <Hero />
      <Collection
        category={collections}
        mapStart={0}
        mapEnd={4}
        selected={selected}
        setSelected={setSelected}
      />
      <Info />
      <Collection
        category={guides}
        mapStart={0}
        mapEnd={4}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
};

export default Home;
