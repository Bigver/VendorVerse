import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


interface ContentProps {
    category: string[];
    logo: string;
    link: string;
    link_contact: string[];
    detail: string
}

const Footer: React.FC<ContentProps> = ({ category, logo, link, link_contact, detail }) => {
    return (
        <div className='footer-ctn1'>
            <div className="content1">
                <div className="logo">
                    <div className='logo'><Link to={`/store/${link}/homepage`}><img src={logo} alt="" /></Link></div>
                    <p>{detail}</p>
                </div>
                <div className="contact">
                    <div className="link">
                        <ul>
                            {link_contact[0] === "/" ? ""
                                : <li><a href={link_contact[0]}><FaFacebookF size={22} /></a></li>
                            }
                            {link_contact[1] === "/" ? ""
                                : <li><a href={link_contact[1]}>< FaInstagram size={22} /></a></li>
                            }
                            {link_contact[2] === "/" ? ""
                                : <li><a href={link_contact[2]}>LINE</a></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content2">
                <ul>
                    <li><a href={`/store/${link}/products/all`}>all</a></li>
                    {category.map((item) => (
                        <li><a href={`/store/${link}/products/${item}`}>{item}</a></li>
                    ))}
                </ul>
            </div>
            <div className="content3">
                <div className="btn">
                    <Link to={`/store/${link}/products/all`}>
                        <button>SHOP NOW</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Footer