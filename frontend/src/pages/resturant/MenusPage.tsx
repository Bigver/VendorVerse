import React, { useState, useEffect } from 'react'
import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Menu from '../../components/restaurant/Menu';
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const MenusPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const params = useParams();
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData)

  const [productData, setProductData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const filteredProduct: any = productData.filter((product: any) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [categoryActive, setCategoryActive] = useState(String(params.category)); // สถานะสำหรับตรวจสอบการโหลด

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${requestMethod}/resturant/menu/find/menu/${params.store_id}/${categoryActive}`);
        setProductData(response.data);
        setLoading(false)
      } catch (error) {
        console.log(error)
        // setError('Failed to fetch Products');
      }
    };
    fetchProducts();
  }, [categoryActive]);
  const table_id = localStorage.getItem("table_id");

  return (
    <div className='search-ctn'>
      <div className="search">
        <Link to={`/resturant/${String(params.nameStore)}/homepage/${table_id}`}><IoChevronBackSharp size={30} color='black' style={{ marginLeft: '10px' }} /></Link>
        <input type="text" placeholder='ค้นห่าเมนู' value={searchTerm}
          onChange={handleSearch} />
      </div>
      <div className="container">
        <div className={`item ${categoryActive === "all" ? 'active' : ''}`} ><a onClick={() => setCategoryActive(`all`)}>ทั้งหมด</a></div>
        {data.category.map((item: any) => (
          <div className={`item ${categoryActive === item ? 'active' : ''}`}>
            <a onClick={() => setCategoryActive(`${item}`)}>{item}</a>
          </div>
        ))}
      </div>
      {loading ? "LOADING" :
        <div className='menus-ctn'>
          {filteredProduct.map((item: any) => (
            <Menu link={String(params.nameStore)} image={JSON.parse(item.product_img)} name={item.name} price={item.price} />
          ))}
        </div>
      }
    </div>
  )
}

export default MenusPage