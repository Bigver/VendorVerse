import React, { useState, useEffect } from 'react'
import Navbar from '../../components/main/Navbar'
import img1 from '../../assets/store1.png'
import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

const ManageWebsitePage = () => {
    const [data, setData]: any[] = useState([]);
    const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด

    const token: any = localStorage.getItem('token');
    let decoded: any

    useEffect(() => {
        decoded = jwtDecode(token);
        const fetchData = async () => {
            try {
                const response = await axios.get(`${requestMethod}/user/store/${decoded.user.id}`); // URL ของ API ที่เราสร้างไว้
                setData(response.data); // เก็บข้อมูลผู้ใช้ใน state
                setLoading(false)
            } catch (error) {
                // setError('Failed to fetch Data');
            }
        };
        fetchData();
    }, []);

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return format(date, 'dd MMMM yyyy', { locale: th }); // ฟอร์แมตเป็น วัน เดือน ปี (ภาษาไทย)
    };

    console.log(data)

    return (
        <div>
            <Navbar nav="navbar-ctn" />
            <div className='manage-ctn'>
                <h1 className='header'>MANAGE WEBSITE</h1>
                <div className='manage'>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        data.map((item: any) => (
                            <div className="card" key={item.id}>
                                <img src={img1} alt="" />
                                <div className="text">
                                    <h1>{item.select_store}</h1>
                                    <p>วันหมดอายุ {formatDate(item.end_date)}</p>
                                    <div className="btn">
                                        <a href={`/${item.name_store}/admin`}>จัดการร้าน</a>
                                        <a href={`/${item.name_store}/homepage`}>เข้าสู่หน้าเว็บไซต์</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default ManageWebsitePage