import React, { useState, useEffect } from 'react'
import Navbar from '../../../components/main/Navbar'
import img1 from '../../../assets/package2.png'
import { useNavigate } from 'react-router-dom';


const StepPage = () => {
    const navigate = useNavigate();
    const token: any = localStorage.getItem('token');

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/package')
        }
        if (token === null) {
            navigate('/login')
        }
    }, []);


    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const handleOnClick = (id: any) => {
        if (id === 1) {
            window.location.href = '/step3'
        } else {
            window.location.href = '/step2'
        }
    }

    return (
        <div>
            <Navbar nav='navbar-ctn' />
            <div className="step-ctn">
                <div className="container-fluid">
                    <br /><br />
                    <ul className="list-unstyled multi-steps">
                        <li className="is-active">PACKAGE</li>
                        <li>PAYMENT</li>
                        <li>SELECT WEBSITE</li>
                        <li>PREVIEW WEBSITE</li>
                        <li>FINISH</li>
                    </ul>
                </div>
                <div className='content-ctn'>
                    <div className="card">
                        <div className="text">
                            {cartItems.length != 0 ? <div><h1>- Package : {cartItems[0].package.name}</h1>
                                <h1>- ราคา {cartItems[0].package.price} ฿</h1>
                                <h1>- จำกัด {cartItems[0].package.order} order /วัน</h1>
                                <h1>- จำกัด {cartItems[0].package.product} product</h1>
                                <h1>- ระยะเวลา {cartItems[0].package.duration} วัน</h1></div>
                                : ""}
                        </div>
                        <img src={img1} alt="" />
                    </div>
                    <div className='link'>
                        <div></div>
                        {cartItems.length != 0 ?
                            <a onClick={() => handleOnClick(cartItems[0].package.id)}>NEXT</a>
                            : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepPage