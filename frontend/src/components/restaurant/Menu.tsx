import React from 'react'
import { Link } from "react-router-dom";

interface ContentProps {
  link: string;
  image: string[];
  name: string;
  price: number;
}

const Menu : React.FC<ContentProps> = ({ link , image , name ,price })=> {
  return (
    <Link to={`/resturant/${link}/product/1`} className='link'>
      <div className='menu-card'>
        <div className="img"><img src={image[0]} alt="" /></div>
        <div className="text">
          <h1>{name}</h1>
          <p>฿ {price}</p>
        </div>
      </div>
    </Link>
  )
}

export default Menu