import React, { useState, useEffect } from 'react'
import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Menu from '../../components/restaurant/Menu';
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const MenusPage2 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event: any) => {
        setSearchTerm(event.target.value);
    };
    const params = useParams();

    const [productData, setProductData]: any[] = useState([]);
    const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
    const filteredProduct: any = productData.filter((product: any) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${requestMethod}/resturant/menu/find/menu/${params.store_id}/all`);
                setProductData(response.data);
                setLoading(false)
            } catch (error) {
                console.log(error)
                // setError('Failed to fetch Products');
            }
        };
        fetchProducts();
    }, []);
    const table_id = localStorage.getItem("table_id");

    return (
        <div className='search-ctn'>
            <div className="search">
                <Link to={`/resturant/${String(params.nameStore)}/homepage/${table_id}`}><IoChevronBackSharp size={30} color='black' style={{ marginLeft: '10px' }} /></Link>
                <input type="text" placeholder='ค้นห่าเมนู' value={searchTerm}
                    onChange={handleSearch} />
            </div>
            {loading ? "LOADING" :
                <div className='menus-ctn'>
                    {filteredProduct.map((item: any) => (
                        <Menu link={String(params.nameStore)} image={JSON.parse(item.product_img)} name={item.name} price={item.price} />
                    ))}
                </div>
            }
        </div>
    )
}

export default MenusPage2