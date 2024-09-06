import React from 'react'
import img1 from '../../../assets/shopping/img1.jpg'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

interface ContentProps {
  image: string;
  title: string;
  detail: string;
  link: string;
}
const Template2: React.FC<ContentProps> = ({ image, title, detail, link }) => {

  return (
    <div className='home-ctn-2'>
      <div className="content">
        <div className="text" data-aos="zoom-in" data-aos-duration="1000">
          <h1>{title}</h1>
          <p>{detail}</p>
          <Link to={`/${link}/products`}>          
            <button>Shop Now <GoArrowUpRight /></button>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="img" data-aos="zoom-out-left" data-aos-duration="1000">
          <img src={image[0]} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Template2