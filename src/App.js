// import React from 'react';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductSearch from './pages/ProductSearch';
import { collections, guides } from './helpers/data';

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {collections.map((collection, idx) => (
              <Route
                key={idx}
                path={'/shop/' + collection.url}
                element={<ProductSearch category={collection} />}
              />
            ))}

            <Route
              path={'/learn'}
              element={<ProductSearch category={guides[0]} />}
            />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
};

export default App;
