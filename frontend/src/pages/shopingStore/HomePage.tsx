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
import { useParams } from 'react-router-dom';


const HomePage = () => {
  const [data, setData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const params = useParams();

  const [pageData, setPageData] = useState(() => {
    const savedData = localStorage.getItem("pageData");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    // บันทึก cartItems ลง localStorage ทุกครั้งที่มีการเปลี่ยนแปลง
    localStorage.setItem("pageData", JSON.stringify(pageData));
  }, [pageData]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/store/page/${params.nameStore}`); // URL ของ API ที่เราสร้างไว้

        const jsonObject = {
          ...response.data,
          image1: JSON.parse(response.data.image1),
          category: JSON.parse(response.data.category)
        };
        setData(jsonObject); // เก็บข้อมูลผู้ใช้ใน state
        setPageData(jsonObject)
        setLoading(false)
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  return (

    <div>
      {loading ? "LOADING" : <div>
        <Navbar logo={pageData.logo} category={pageData.category} link={data.name_store} />
        {pageData.template === 1 ?
          <Template1 image={pageData.image1} category={pageData.category} link={data.name_store} />
          : ""
        }
        {pageData.template === 2 ?
          <Template2 image={pageData.image1} title={pageData.title1} detail={pageData.detail1} link={data.name_store} /> 
          : ""
        }
         {pageData.template === 3 ?
          <Template3 /> 
          : ""
        }
        <About image={pageData.image2} title={pageData.title2} detail={pageData.detail2} link={data.name_store} />
        <div className='popular-ctn'>
          <div className="text" data-aos="fade-up" data-aos-duration="500">
            <h1>POPULAR COLLECTION</h1>
          </div>
          <Popular />
        </div>
        {/* <Contact/> */}
        <Footer logo={data.logo} category={data.category} link={data.name_store} link_contact={[data.link_facebook, data.link_instragram, data.link_line]} detail={data.detail_footer} />
      </div>

      }

    </div>
  )
}

export default HomePage