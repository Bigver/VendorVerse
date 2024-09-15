import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/main/Navbar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const token: any = localStorage.getItem('token');


  useEffect(() => {
    if (cartItems.length < 1) {
      navigate('/package')
    }
    if (token === null) {
      navigate('/login')
    }
  }, []);
  const [files, setFile]: any = useState('')
  const [nextPage, setNextPage]: any = useState('/step2')
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });



  const handleFile = (e: any) => {
    setFile(e.target.files[0]);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("files", files);
    if (!files){
      toast.error('กรุณาเพิ่มไฟล์');
      return
    }
    try {
      const res = await fetch("http://localhost:3000/api/upload/slipok", {
        method: "POST",
        body: formData
      })

      if (res.ok) {
        console.log("Request successful")
      } else {
        throw new Error("Failes to send a request")
      }

      const data = await res.json();
      if (data.data.amount === cartItems[0].package.price) {
        const newCartItems = [...cartItems];
        newCartItems[0] = { ...newCartItems[0], package: cartItems[0].package, permission: true };
        setCartItems(newCartItems);
        toast.success('สลิปถูกต้อง');
        setNextPage('/step3')
      } else {
        toast.error('สลิปไม่ถูกต้อง');
      }
      // setSlipOkData(data)

    } catch (error) {
      console.log("Error fetching data : ", error)
    }

  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);



  return (
    <div>
      <Navbar nav="navbar-ctn" />
      <div className='step-ctn'>
        <div className="container-fluid">
          <br /><br />
          <ul className="list-unstyled multi-steps">
            <li>PACKAGE</li>
            <li className="is-active">PAYMENT</li>
            <li>SELECT WEBSITE</li>
            <li>PREVIEW WEBSITE</li>
            <li>FINISH</li>
          </ul>
        </div>
        <div className="payment">
          <div className='text'>
            <h1>กรุณาโอนมาที่บัญชี</h1>
            <div className="card">
              <div className="head">
                <img src="https://www.kasikornbank.com/SiteCollectionDocuments/about/img/logo/logo.png" alt="" />
                <h3>ธนาคารกสิกรไทบ</h3>
              </div>
              <div className="text-1">
                <h1>144130459</h1>
                <u />
                <h1>ฐิติพงศ์ โนจ๊ะ</h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">*กรุณาโอนเงินให้ตรงกับราคาแพคเกจ</label>
            <input type="file" accept='image/*' onChange={handleFile} />
            <button type='submit'>Check Slip</button>
          </form>
        </div>
        <div className='link'>
          <a href="/step1">BACK</a>
          <a href={nextPage}>NEXT</a>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;