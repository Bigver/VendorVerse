import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from "react-router-dom";

const MySwal = withReactContent(Swal);

interface ContentProps {
  category: string[];
  logo : string;
  link : string
}

const Navbar : React.FC<ContentProps> = ({ logo , category , link }) => {
  const showAlertWithInput = () => {
    MySwal.fire({
      title: 'Search Order',
      input: 'text', // กำหนดชนิดของ input
      inputPlaceholder: 'ค้นหาคำสั่งซ์้อ(email,เลขคำสั่งซื้อ)',
      showCancelButton: true,
      confirmButtonText: 'ค้นหา',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        const userName = result.value; // รับค่าที่ผู้ใช้กรอก
        Swal.fire(`Hello, ${userName}!`); // แสดงค่าใน SweetAlert
      }
    });
  };
  

  return (
    <div className='navbar-ctn-1'>
      <div className='logo'><Link to={`/${link}/homepage`}><img src={logo} alt="" /></Link></div>
      <div className='link'>
        <ul>
          {category.map((item) => (
            <li><a href={item}>{item}</a></li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <a onClick={showAlertWithInput}><CiDeliveryTruck size={32} /></a>
        <a href={`/${link}/cart`}><CiShoppingCart size={30} /><span>1</span></a>
      </div>
    </div>
  )
}

export default Navbar