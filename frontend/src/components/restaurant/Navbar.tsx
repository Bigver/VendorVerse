import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";

interface ContentProps {
  logo: string;
  link: string;
}

const Navbar: React.FC<ContentProps> = ({ logo, link }) => {
  const table_id = localStorage.getItem("table_id");
  return (
    <div className='navbar-ctn2'>
      {logo === "" ?
        <Link to={`/resturant/${link}/homepage/${table_id}`}><IoChevronBackSharp size={30} color='black' style={{ marginLeft: '10px' }} /></Link>
        : <Link to={`/resturant/${link}/homepage/${table_id}`}>
          <div className="logo"><img src={logo} alt="" /></div>
        </Link>}

      <div className="cart-ctn">
        <div className='cart'>
          <Link to={`/resturant/${link}/cart`}>
            <a ><CiShoppingCart size={32} /><span>1</span></a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar