import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './pages/productDetail';
import CreateProduct from './pages/createProduct';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route exact path="/product/:id" element={<Product />} />
  <Route exact path="/create-product" element={<CreateProduct />} />

    <Route path="/"  element={<App />} exact />
  </Routes>
</BrowserRouter>
);