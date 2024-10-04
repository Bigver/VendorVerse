import React from 'react'
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

interface ContentProps {
  image: string;
  title: string;
  detail: string;
  link: string
}
const About: React.FC<ContentProps> = ({ image, title, detail, link }) => {
  return (
    <div className='about-template1'>
      <div className="img" data-aos="zoom-out" data-aos-duration="1000">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h1 data-aos="fade-up"data-aos-duration="500">{title}</h1>
        <p data-aos="fade-up" data-aos-duration="1000">{detail}</p>
        <Link to={`/store/${link}/products/all`}>
          <button data-aos="fade-up" data-aos-duration="1200">Shop Now  <GoArrowUpRight /></button>
        </Link>
      </div>
    </div>
  )
}

export default About