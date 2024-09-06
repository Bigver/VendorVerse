import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '../pages/shopingStore/HomePage';
import '../styles/shopingStore/main.scss'
import ProductsPage from '../pages/shopingStore/ProductsPage';
import ProductPage from '../pages/shopingStore/ProductPage';
import CartPage from '../pages/shopingStore/CartPage';
import Information from '../pages/shopingStore/InformationPage';

const ShoppingStore = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/:nameStore/homepage" element={<HomePage />} />
        <Route path="/:nameStore/products" element={<ProductsPage />} />
        <Route path="/:nameStore/products/product/:id" element={<ProductPage />} />
        <Route path="/:nameStore/cart" element={<CartPage />} />
        <Route path="/:nameStore/information" element={<Information />} />
      </Routes>
    </BrowserRouter>
  )
}

export default ShoppingStore