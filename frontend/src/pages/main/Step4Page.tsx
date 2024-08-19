import React, { useEffect, useState } from 'react'
import Navbar from '../../components/main/Navbar'
import img1 from '../../assets/store1.png'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Step4Page = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const token: any = localStorage.getItem('token');
  let decoded: any
  if (token) {
    decoded = jwtDecode(token);
  }

  useEffect(() => {
    if (cartItems[0].package.id != 0 && cartItems[0].permission === false) {
      navigate('/step2')
    }
    if (cartItems.length < 1) {
      navigate('/package')
    }
    if (token === null) {
      navigate('/login')
    }
  }, []);

  const handleSelect = async (data: any) => {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate);
    expirationDate.setDate(currentDate.getDate() + 31);
    const formattedDate = expirationDate.toISOString().split('T')[0];
    try {
      await axios.post(`${requestMethod}/user/create/store`, {
        user_id: decoded.user.id,
        name_store: data,
        select_store: cartItems[0].selectShop,
        package_id: cartItems[0].package.id,
        end_date: formattedDate,
        permission: cartItems[0].permission
      });
      toast.success('create store successfu');
      window.location.href = '/step5'
    } catch (error) {
      toast.error('error');
    }
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <div>
      <Navbar nav="navbar-ctn" />
      <div className="step-ctn">
        <div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li>PACKAGE</li>
            <li>PAYMENT</li>
            <li>SELECT WEBSITE</li>
            <li className="is-active">NAME WEBSITE</li>
            <li>FINISH</li>
          </ul>
        </div>
        <div className="form">
          <div className='card-ctn'>
            <div className='card'>
              <div><img src={img1} alt="" /></div>
              <h1>เว็บไซต์ร้านค้า</h1>
            </div>
            <form action="">
              <input type="text" placeholder='ตั้งชื่อร้านค้า' value={name} onChange={(e) => setName(e.target.value)} required />
            </form>
          </div>
        </div>
        <div className='link'>
          <a href="/step3">BACK</a>
          <a onClick={() => handleSelect(name)}>NEXT</a>
        </div>
      </div>
    </div>
  )
}

export default Step4Page