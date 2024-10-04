import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import Menu from '../Menu';
import { requestMethod } from "../../../requestMethod";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

interface ContentProps {
  link: string;
  store_id: number;
  category: string[];
  image: string[]
}


const Template1: React.FC<ContentProps> = ({ link, store_id, category, image }) => {
  const [productData, setProductData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const [categoryActive, setCategoryActive] = useState('all'); // สถานะสำหรับตรวจสอบการโหลด
  const [slideImage, setSlideImage] = useState(0)
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${requestMethod}/resturant/menu/find/menu/${store_id}/${categoryActive}`);
        setProductData(response.data);
        setLoading(false)
      } catch (error) {
        console.log(error)
        // setError('Failed to fetch Products');
      }
    };
    fetchProducts();
  }, [categoryActive]);

  const handleSlide = (n: any) => {
    const count = slideImage + n
    if (count < 0) {
      setSlideImage(0)
    } else if (count === image.length) {
      setSlideImage(0)
    } else {
      setSlideImage(slideImage + n)
    }
  }

  return (
    <div className='home-ctn-4'>
      <div className="show-image">
        <button onClick={() => handleSlide(-1)}><AiFillCaretLeft size={30} /></button>
        <img src={image[slideImage]} alt="" />
        <button onClick={() => handleSlide(+1)}><AiFillCaretRight size={30} /></button>
      </div>
      <div className="container">
        <div className="item" style={{ width: '30px' }}><Link to={`/resturant/${link}/menus2/${store_id}`}><a><CiSearch size={16} /></a></Link></div>
        <div className={`item ${categoryActive === "all" ? 'active' : ''}`} ><a onClick={() => setCategoryActive(`all`)}>ทั้งหมด</a></div>
        {category.map((item: any) => (
          <div className={`item ${categoryActive === item ? 'active' : ''}`}>
            <a onClick={() => setCategoryActive(`${item}`)}>{item}</a>
          </div>
        ))}
      </div>
        {loading ? "LOADING" :
          <div className='menus-ctn'>
            {productData.map((item: any) => (
              <Menu link={link} image={JSON.parse(item.product_img)} name={item.name} price={item.price} />
            ))}
          </div>
        }
    </div>
  )
}

export default Template1