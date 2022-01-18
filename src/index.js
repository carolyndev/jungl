import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
// import Home from './components/Home';
// import Product from './components/ProductPage';
// import { collections } from './helpers/data';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.container')
);
