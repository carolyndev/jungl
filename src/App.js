// import React from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductSearch from './pages/ProductSearch';
import ProductPage from './pages/ProductPage';
import CartSide from './components/CartSide';
import { collections, guides, allProducts } from './helpers/data';

const App = () => {
  const [selected, setSelected] = useState({});
  const [itemToAdd, setItemToAdd] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [cartSideOpen, setCartSideOpen] = useState(false);

  useEffect(() => {
    getLocalSelected();
  }, []);

  useEffect(() => {
    saveLocalSelected();
  }, [selected]);

  useEffect(() => {
    getLocalCart();
  }, []);

  useEffect(() => {
    saveLocalCart();
  }, [cartItems]);

  const saveLocalCart = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  const getLocalCart = () => {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify({}));
    } else {
      let cartLocal = JSON.parse(localStorage.getItem('cart'));
      setCartItems(cartLocal);
    }
  };

  const saveLocalSelected = () => {
    localStorage.setItem('selected', JSON.stringify(selected));
  };

  const getLocalSelected = () => {
    if (localStorage.getItem('selected') === null) {
      localStorage.setItem('selected', JSON.stringify({}));
    } else {
      let selectedLocal = JSON.parse(localStorage.getItem('selected'));
      setSelected(selectedLocal);
    }
  };

  const toggleCartSide = () => {
    setCartSideOpen(!cartSideOpen);
    document.body.classList.toggle('open');
    document.documentElement.classList.toggle('open');
  };

  return (
    <>
      <Router>
        <Header
          cartItems={cartItems}
          setCartItems={setCartItems}
          cartSideOpen={cartSideOpen}
          setCartSideOpen={setCartSideOpen}
          toggleCartSide={toggleCartSide}
        />

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
                <CartPage cartItems={cartItems} setCartItems={setCartItems} />
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
                  itemToAdd={itemToAdd}
                  setItemToAdd={setItemToAdd}
                  cartSideOpen={cartSideOpen}
                  setCartSideOpen={setCartSideOpen}
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
                    itemToAdd={itemToAdd}
                    setItemToAdd={setItemToAdd}
                    cartSideOpen={cartSideOpen}
                    setCartSideOpen={setCartSideOpen}
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
                  itemToAdd={itemToAdd}
                  setItemToAdd={setItemToAdd}
                  cartSideOpen={cartSideOpen}
                  setCartSideOpen={setCartSideOpen}
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
                  cartSideOpen={cartSideOpen}
                  setCartSideOpen={setCartSideOpen}
                  toggleCartSide={toggleCartSide}
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
                  cartSideOpen={cartSideOpen}
                  setCartSideOpen={setCartSideOpen}
                />
              }
            />
          </Routes>

          <CartSide
            cartSideOpen={cartSideOpen}
            setCartSideOpen={setCartSideOpen}
            cartItems={cartItems}
            setCartItems={setCartItems}
            toggleCartSide={toggleCartSide}
          />
        </main>

        <Footer />
      </Router>
    </>
  );
};

export default App;
