import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
// Context
import { ProductsProvider } from './context/products';
import { CartProvider } from './context/cart';
import { UserProvider } from './context/user';


ReactDOM.render(
  <Router>
    <ProductsProvider>
      <CartProvider>
      <UserProvider>
        <App />
      </UserProvider>
      </CartProvider>
    </ProductsProvider>
  </Router> , 
  document.getElementById("root")
);
