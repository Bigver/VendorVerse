import React from 'react'
import Navbar from '../../../components/main/Navbar'
import img1 from '../../../assets/complete.png'


const Step5Page = () => {
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
                        <li>NAME WEBSITE</li>
                        <li className="is-active">FINISH</li>
                    </ul>
                </div>
                <div className="content-step5">
                    <div className="card">
                        <div className="img"><img src={img1} alt="" /></div>
                        <div className="text">
                            <h1>select website : เว็บไซต์ร้านค้า</h1>
                            <h1>Package : Starter</h1>
                            <h1>end date : 20/30/2567</h1>
                        </div>
                    </div>
                </div>
                <div className='link'>
                    <div></div>
                    <a href="/step5">จัดการร้านค้า</a>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Step5Page