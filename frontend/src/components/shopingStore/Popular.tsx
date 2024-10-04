import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import { toast } from 'react-toastify';
import ProductPopular from './ProductPopular';

const Popular = () => {
    const [productData, setProductData]: any[] = useState([]);
    const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
    const pageData: any = localStorage.getItem('pageData');
    const data = JSON.parse(pageData)
    const [productImage, setProductImage] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${requestMethod}/product/find/product/${data.store_id}/all`);
                setProductData(response.data);
                setLoading(false)
            } catch (error) {
                console.log(error)
                // setError('Failed to fetch Products');
            }
        };
        fetchProducts();
    }, []);


    return (
        <div className="maylike-products-wrapper">
            <div className="marquee">
                <div className="maylike-products-container track">
                    {productData.map((item: any) => (
                        <div key={item.id}>
                            <div key={item.id}>
                                <ProductPopular link={data.name_store} id={item.id} name={item.name} product_img={JSON.parse(item.product_img)} price={item.price} stock={item.stock} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popular