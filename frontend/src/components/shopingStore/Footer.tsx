import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-ctn1'>
            <div className="content1">
                <div className="logo">
                    <h1 style={{ color: 'white' }}>LOGO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum veniam quos fugiat maiores fuga quam consectetur omnis quis! Sequi iusto qui dignissimos nostrum beatae. Neque accusamus temporibus at cum.</p>
                </div>
                <div className="contact">
                    <div className="link">
                        <ul>
                            <li><a href=""><FaFacebookF size={22} /></a></li>
                            <li><a href="">< FaInstagram size={22} /></a></li>
                            <li><a href="">LINE</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content2">
                <ul>
                    <li><a href="">Women</a></li>
                    <li><a href="">Men</a></li>
                    <li><a href="">Glasses</a></li>
                    <li><a href="">Women</a></li>
                </ul>
            </div>
            <div className="content3">
                <div className="btn">
                    <button>SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Footer