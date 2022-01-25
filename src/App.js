// import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductSearch from './pages/ProductSearch';
import ProductPage from './pages/ProductPage';
import { collections, guides, allProducts } from './helpers/data';

const App = () => {
  const [selected, setSelected] = useState({});
  const [itemToAdd, setItemToAdd] = useState({});
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('selected') === null) {
      localStorage.setItem('selected', JSON.stringify({}));
    } else {
      let selectedLocal = JSON.parse(localStorage.getItem('selected'));
      setSelected(selectedLocal);
    }
  }, []);

  useEffect(() => {
    saveLocalSelected();
  }, [selected]);

  const saveLocalSelected = () => {
    localStorage.setItem('selected', JSON.stringify(selected));
  };

  return (
    <>
      <Router>
        <Header cartItems={cartItems} setCartItems={setCartItems} />

        <main>
          <Routes>
            {/* home */}
            <Route
              exact
              path="/"
              element={
                <Home
                  selected={selected}
                  setSelected={setSelected}
                  itemToAdd={itemToAdd}
                  setItemToAdd={setItemToAdd}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            {/* cart */}

            <Route
              exact
              path={'cart'}
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            {/* shop all */}
            <Route
              exact
              path={'/shop'}
              element={
                <ProductSearch
                  category={allProducts[0]}
                  selected={selected}
                  setSelected={setSelected}
                />
              }
            />

            {/* shop collections */}
            {collections.map((collection, idx) => (
              <Route
                key={idx}
                path={'/' + collection.url}
                element={
                  <ProductSearch
                    category={collection}
                    selected={selected}
                    setSelected={setSelected}
                  />
                }
              />
            ))}

            {/* guides */}
            <Route
              path={'/guides'}
              element={
                <ProductSearch
                  category={guides[0]}
                  selected={selected}
                  setSelected={setSelected}
                />
              }
            />

            <Route
              exact
              path={'/item/:featured'}
              element={
                <ProductPage
                  guides={guides}
                  allProducts={allProducts}
                  selected={selected}
                  setSelected={setSelected}
                  itemToAdd={itemToAdd}
                  setItemToAdd={setItemToAdd}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />

            <Route
              path={'/guide:route'}
              element={
                <ProductSearch
                  category={guides[0]}
                  selected={selected}
                  setSelected={setSelected}
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
};

export default App;
