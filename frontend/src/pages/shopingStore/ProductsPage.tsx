import Filter from '../../components/shopingStore/Filter'
import { LuShoppingCart } from "react-icons/lu";
import Product from '../../components/shopingStore/Product';
import Navbar from '../../components/shopingStore/Navbar';
import React, { useState, useEffect } from 'react'
import Footer from '../../components/shopingStore/Footer';

const ProductsPage = () => {
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData)
  const id = 1
  return (
    <div>
        <Navbar logo={data.logo} category={JSON.parse(data.categoty)} link={data.name_store}/>
        <div className='products-ctn'>
        <Filter />
        <div className="product">
          <Product link={data.name_store} id={id}/>
        </div>
        <Footer/>
      </div>

    </div>
  )
}

export default ProductsPage