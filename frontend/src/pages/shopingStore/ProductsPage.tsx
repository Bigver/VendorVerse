import { LuShoppingCart } from "react-icons/lu";
import Product from '../../components/shopingStore/Product';
import Navbar from '../../components/shopingStore/Navbar';
import React, { useState, useEffect } from 'react'
import Footer from '../../components/shopingStore/Footer';
import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";

const ProductsPage = () => {
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData)
  const params = useParams();




  const [productData, setProductData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const [category, setCategory] = useState(params.category); // สถานะสำหรับตรวจสอบการโหลด


  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredProduct: any = productData.filter((product: any) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${requestMethod}/product/find/product/${data.store_id}/${category}`);
        setProductData(response.data);
        console.log(data.store_id)
        setLoading(false)
      } catch (error) {
        console.log(error)
        // setError('Failed to fetch Products');
      }
    };
    fetchProducts();
  }, [category]);


  return (
    <div>
      <Navbar logo={data.logo} category={data.category} link={data.name_store} />
      <div className='products-ctn'>
        <div className='filter-ctn'>
          <div className='filter'>
            <div className="category">
              <div className={`content ${category === "all" ? 'active' : ''}`}>
                <a onClick={() => setCategory(`all`)} >ALL</a>
              </div>
              {data.category.map((item: any) => (
                <div className={`content ${category === item ? 'active' : ''}`}>
                  <a onClick={() => setCategory(`${item}`)}>{item}</a>
                </div>
              ))}
            </div>
            <div className="filter1">
              <input type="text" placeholder='ค้นหาสินค้า'
                id=""
                value={searchTerm}
                onChange={handleSearch} />
              <div className='icon'><IoSearchOutline size={20} /></div>
            </div>
          </div>
        </div>
        <div className="product">
          {loading ? "LOADING" :
            <>
              {filteredProduct.map((item: any) => (
                <div key={item.id}>
                  <Product link={data.name_store} id={item.id} name={item.name} product_img={JSON.parse(item.product_img)} price={item.price} stock={item.stock} />
                </div>
              ))}
            </>}
        </div>
        <Footer logo={data.logo} category={data.category} link={data.name_store} link_contact={[data.link_facebook, data.link_instragram, data.link_line]} detail={data.detail_footer} />     
      </div>

    </div>
  )
}

export default ProductsPage