import Navbar from '../../components/shopingStore/Navbar'
import Template1 from '../../components/shopingStore/HomePage/Template1'
import Template2 from '../../components/shopingStore/HomePage/Template2'
import Template3 from '../../components/shopingStore/HomePage/Template3'
import Popular from '../../components/shopingStore/Popular'
import About from '../../components/shopingStore/About'
import Contact from '../../components/shopingStore/Contact'
import Footer from '../../components/shopingStore/Footer'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import { Link, useNavigate, useParams } from 'react-router-dom';

1
const HomePage = () => {
  const [data, setData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const params = useParams();


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${requestMethod}/store/page/${params.nameStore}`); // URL ของ API ที่เราสร้างไว้
        setData(response.data); // เก็บข้อมูลผู้ใช้ใน state
        setPageData(response.data)
        setLoading(false)
      } catch (error) {
        // setError('Failed to fetch users');
      }
    };
    fetchUsers();
  }, []);

  const [pageData, setPageData] = useState(() => {
    const savedData = localStorage.getItem("pageData");
    return savedData ? JSON.parse(savedData) : [];
  });


  return (

    <div>
      {loading ? "LOADING" : <div>
        <Navbar logo={pageData.logo} category={JSON.parse(pageData.categoty)} link={data.name_store} />
        {pageData.template === 1 ?
          <Template1 image={JSON.parse(pageData.image1)}  category={JSON.parse(pageData.categoty)} />
          : <Template2 image={JSON.parse(pageData.image1)} title={pageData.title1} detail={pageData.detail1} link={data.name_store} />
        }
        <About image={pageData.image2} title={pageData.title2} detail={pageData.detail2} />
        <Popular />
        {/* <Contact/> */}
        <Footer />     
        </div>
      }

    </div>
  )
}

export default HomePage