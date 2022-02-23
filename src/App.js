// import React from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductSearch from './pages/ProductSearch';
import ProductPage from './pages/ProductPage';
import CartSide from './components/CartSide';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { collections, guides, allProducts, tools } from './helpers/data';
import { removeScrollBlock } from './helpers/functions';

const App = () => {
  const [selected, setSelected] = useState({});
  const [itemToAdd, setItemToAdd] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [cartSideOpen, setCartSideOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [numItems, setNumItems] = useState(0);
  const [showMenus, setShowMenus] = useState(true);

  useEffect(() => {
    let totalItems = 0;
    cartItems.forEach((item) => {
      totalItems += item.quantity;
    });
    setNumItems(totalItems);
  }, [cartItems]);

  useEffect(() => {
    let arr = [];
    cartItems.map((item) => arr.push(item.quantity * item.unitPrice));
    let sum = arr.reduce((prev, a) => prev + a, 0);
    setCartTotal(sum);
  }, [cartItems]);

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
    if (window.location.pathname.includes('cart')) {
      return;
    }
    setCartSideOpen(!cartSideOpen);
    document.body.classList.toggle('open');
    document.documentElement.classList.toggle('open');
  };

  const closeCartSide = () => {
    setCartSideOpen(false);
    removeScrollBlock();
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
          numItems={numItems}
          showMenus={showMenus}
          setShowMenus={setShowMenus}
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

            <Route
              exact
              path={'/tools'}
              element={
                <ProductSearch
                  category={tools[0]}
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

            {/* product page */}
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

            {/* cart page */}
            <Route
              exact
              path={'/cart'}
              element={
                <CartPage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  selected={selected}
                  setSelected={setSelected}
                  itemToAdd={itemToAdd}
                  setItemToAdd={setItemToAdd}
                  cartSideOpen={cartSideOpen}
                  setCartSideOpen={setCartSideOpen}
                  closeCartSide={closeCartSide}
                  cartTotal={cartTotal}
                  numItems={numItems}
                  showMenus={showMenus}
                  setShowMenus={setShowMenus}
                />
              }
            />

            {/* checkout page */}
            <Route
              exact
              path={'/checkout'}
              element={
                <CheckoutPage
                  closeCartSide={closeCartSide}
                  showMenus={showMenus}
                  setShowMenus={setShowMenus}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  numItems={numItems}
                  cartTotal={cartTotal}
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
            closeCartSide={closeCartSide}
            cartTotal={cartTotal}
            showMenus={showMenus}
            setShowMenus={setShowMenus}
          />
        </main>

        <Footer showMenus={showMenus} setShowMenus={setShowMenus} />
      </Router>
    </>
  );
};

export default App;
