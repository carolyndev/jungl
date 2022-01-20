// import React from 'react';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductSearch from './pages/ProductSearch';
import { collections, guides, allProducts } from './helpers/data';

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* shop all */}
            <Route
              exact
              path={'/shop'}
              element={<ProductSearch category={allProducts[0]} />}
            />

            {/* shop collections */}
            {collections.map((collection, idx) => (
              <Route
                key={idx}
                path={'/' + collection.url}
                element={<ProductSearch category={collection} />}
              />
            ))}

            {/* guides */}
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
