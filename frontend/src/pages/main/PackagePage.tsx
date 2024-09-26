import React, { useState, useEffect } from 'react'
import Navbar from '../../components/main/Navbar'
import Footer from '../../components/main/Footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import { Link } from "react-router-dom";

const PackagePage = () => {
  const navigate = useNavigate();

  const [packages, setPackage]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${requestMethod}/package`); // URL ของ API ที่เราสร้างไว้
        setPackage(response.data); // เก็บข้อมูลผู้ใช้ใน state
        setLoading(false)
      } catch (error) {
        // setError('Failed to fetch users');
      }
    };
    fetchUsers();
  }, []);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  let permission

  const handleSelect = (data: any) => {
    if (data.id === 1){
      permission = true
    }else{
      permission = false
    }
    if (cartItems.length > 0) {
      const newCartItems = [...cartItems];
      newCartItems[0] = { ...newCartItems[0] , package: data , permission : permission , image : ''};
      setCartItems(newCartItems);
    }else{
      setCartItems([
        ...cartItems,
        {
          package: data,
          permission : permission
        },
      ]);
    }
    window.location.href = '/step1'
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <div className="app">
      <Navbar nav="navbar-ctn" />
      <div className="package-ctn">
        <div>
          {loading ? "LOADING" : (<div className="card-ctn">
            <div className="card">
              <div className="img">
                <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" />
              </div>
              <div className="text">
                <h1>{packages[0].name}</h1>
                <p>{packages[0].detail}</p>
                <div className="price">
                  <h1>{packages[0].price}<span> ฿ /month</span></h1>
                </div>
                <div className="feature">
                  <h2>&#183; {packages[0].order} order/day</h2>
                  <h2>&#183; {packages[0].product} product</h2>
                  <h2>&#183; {packages[0].duration} day</h2>
                </div>
                <button onClick={() => handleSelect(packages[0])}>FREE</button>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" />
              </div>
              <div className="text">
                <h1>{packages[1].name}</h1>
                <p>{packages[1].detail}</p>
                <div className="price">
                  <h1>{packages[1].price}<span> ฿ /month</span></h1>
                </div>
                <div className="feature">
                  <h2>&#183; {packages[1].order} order/day</h2>
                  <h2>&#183; {packages[1].product} product</h2>
                  <h2>&#183; {packages[1].duration} day</h2>
                </div>
                <button onClick={() => handleSelect(packages[1])}>{packages[1].price} ฿</button>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" />
              </div>
              <div className="text">
                <h1>{packages[2].name}</h1>
                <p>{packages[2].detail}</p>
                <div className="price">
                  <h1>{packages[2].price}<span> ฿ /month</span></h1>
                </div>
                <div className="feature">
                  <h2>&#183; {packages[2].order} order/day</h2>
                  <h2>&#183; {packages[2].product} product</h2>
                  <h2>&#183; {packages[2].duration} day</h2>
                </div>
                <button onClick={() => handleSelect(packages[2])}>{packages[2].price} ฿</button>
              </div>
            </div>
          </div>

          )}

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PackagePage