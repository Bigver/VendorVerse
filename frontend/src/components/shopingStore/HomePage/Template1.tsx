import React from 'react'
import { Link } from "react-router-dom";

interface ContentProps {
    image: string[];
    category : string[];
    link : string
  }


const Template1 : React.FC<ContentProps> = ({ image, category , link })=> {
    return (
        <div className='home-ctn-1'>
            <div className='content'>
                <div className='img' data-aos="zoom-out-right" data-aos-duration="2000">
                    <img src={image[0]} alt="" />
                </div>
                <Link to={`/store/${link}/products/${category[0]}`}>  
                <div className="text">
                    <h1>{category[0]}</h1>
                </div>
                </Link>
            </div>
            <div className='content'>
                <div className='img' data-aos="zoom-out" data-aos-duration="1000">
                    <img src={image[1]} alt="" />
                </div>
                <Link to={`/store/${link}/products/${category[1]}`}>  
                <div className="text">
                    <h1>{category[1]}</h1>
                </div>
                </Link>
            </div>
            <div className='content'>
                <div className='img' data-aos="zoom-out-left" data-aos-duration="2000">
                    <img src={image[2]} alt="" />
                </div>
                <Link to={`/store/${link}/products/${category[2]}`}>  
                <div className="text">
                    <h1>{category[2]}</h1>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Template1