import React, { useState, useEffect } from 'react'
import Navbar from '../../components/restaurant/Navbar'
import Template1 from '../../components/restaurant/home/Template1'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import Template2 from '../../components/restaurant/home/Template2';

const HomePage = () => {
  const [data, setData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const params = useParams();
  

  const [pageData, setPageData] = useState(() => {
    const savedData = localStorage.getItem("pageData");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("pageData", JSON.stringify(pageData));
  }, [pageData]);

  
  useEffect(() => {
    localStorage.setItem('table_id', String(params.table_id)); // เก็บ token ใน local storage
  }, [params.table_id]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/resturant/page/${params.nameStore}`); // URL ของ API ที่เราสร้างไว้

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
    <div className='resturant-shop'>
      <Navbar logo={pageData.logo} link={pageData.name_store} />
      <Template2 link={pageData.name_store} store_id={pageData.store_id} category={pageData.category} image={pageData.image1}/>
    </div>
  )
}

export default HomePage