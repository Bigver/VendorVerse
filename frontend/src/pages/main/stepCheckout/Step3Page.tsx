import React, { useState, useEffect } from 'react'
import Navbar from '../../../components/main/Navbar'
import img1 from '../../../assets/store1.png'
import img2 from '../../../assets/store2.png'
import img3 from '../../../assets/store3.png'
import { useNavigate } from 'react-router-dom';

export const SelectWebPage = () => {


  const navigate = useNavigate();
  const token: any = localStorage.getItem('token');
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

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

  const [select, setSelect] = useState('');




  const handleSelect = (data: any) => {
    if (cartItems.length > 0) {
      const newCartItems = [...cartItems];
      newCartItems[0] = { ...newCartItems[0], package: cartItems[0].package, selectShop: data };
      setCartItems(newCartItems);
    }
    window.location.href = '/step4'
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
            <li className="is-active">SELECT WEBSITE</li>
            <li>NAME WEBSITE</li>
            <li>FINISH</li>
          </ul>
        </div>
        <div className='content-ctn'>
          <div className="card-2">
            <form action="">
              <div className='input'>
                <img src={img1} alt="" />
                <label htmlFor="">เว็บไซต์ร้านค้า</label>
                <div>
                  <input type="radio" name='web' value="storeShop" onChange={(e) => setSelect(e.target.value)} required />
                </div>
              </div>
              <div className='input'>
                <img src={img2} alt="" />
                <label htmlFor="">เว็บไซต์ร้านเช่าสินค้า</label>
                <div>
                  <input type="radio" name='web' value="rentalShop" onChange={(e) => setSelect(e.target.value)} required />
                </div>
              </div>
              <div className='input'>
                <div>
                  <img src={img3} alt="" />
                </div>
                <label htmlFor="">เว็บไซต์ร้านอาหารออนไลน์</label>
                <div>
                  <input type="radio" name='web' value="resturant" onChange={(e) => setSelect(e.target.value)} required />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='link'>
          <a href="/step1">BACK</a>
          <a onClick={() => handleSelect(select)}>NEXT</a>
        </div>
      </div>
    </div>
  )
}
