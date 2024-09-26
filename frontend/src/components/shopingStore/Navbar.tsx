import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { useState , useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from "react-router-dom";
import { requestMethod } from "../../requestMethod";
import axios from 'axios';

const MySwal = withReactContent(Swal);

interface ContentProps {
  category: string[];
  logo : string;
  link : string
}

const Navbar : React.FC<ContentProps> = ({ logo , category , link }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItemsStore");
    return savedCart ? JSON.parse(savedCart) : [];
  });



  const showAlertWithInput = () => {
    MySwal.fire({
      title: 'Search Order',
      input: 'number', // กำหนดชนิดของ input
      inputPlaceholder: 'ค้นหาคำสั่งซ์้อ(email,เลขคำสั่งซื้อ)',
      showCancelButton: true,
      confirmButtonText: 'ค้นหา',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        const id = result.value; // รับค่าที่ผู้ใช้กรอก
        const fetchUsers = async () => {
          try {
            const response = await axios.get(`${requestMethod}/order/find/${id}`);
            Swal.fire({
              title:  `ORDER ID : ${(id).toString()}`,
              html: `การจัดส่ง : ${response.data.shipping_status} <br> สถานะการชำระเงิน : ${response.data.payment_status}`,
            }); // แสดงค่าใน SweetAlert
          } catch (error) {
            Swal.fire("ไม่มีข้อมูล")
          }
        };
        fetchUsers();
      }
    });
  };
  

  return (
    <div className='navbar-ctn-1'>
      <div className='logo'><Link to={`/${link}/homepage`}><img src={logo} alt="" /></Link></div>
      <div className='link'>
        <ul>
          {category.map((item) => (
            <li><a href={`/${link}/products/${item}`}>{item}</a></li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <a onClick={showAlertWithInput}><CiDeliveryTruck size={32} /></a>
        <a href={`/${link}/cart`}><CiShoppingCart size={30} /><span>{cartItems.length}</span></a>
      </div>
    </div>
  )
}

export default Navbar