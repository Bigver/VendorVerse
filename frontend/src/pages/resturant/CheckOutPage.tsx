import Navbar from '../../components/restaurant/Navbar'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoTrashBinOutline } from "react-icons/io5";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestMethod } from "../../requestMethod";


const CheckOutPage = () => {

  const params = useParams();
  const [orderData, setOrderData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const [text, setText]: any[] = useState("");
  const table_id = localStorage.getItem("table_id");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/resturant/order/findlast/${table_id}`);
        const jsonObject = {
          ...response.data,
          item_detail: JSON.parse(response.data.item_detail),
        };

        setOrderData(jsonObject);
        setLoading(false)
      } catch (error) {
        setText('ไม่พบรายการอาหาร!')
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar logo="" link={String(params.nameStore)} />
      <div className="cart-ctn3">
        <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>รายการสั่งซื้อโต๊ะ {table_id}</h1>
        <div className="cart">
          {loading ? <div><h4 style={{ textAlign: 'center', fontWeight: 'normal' }}>{text}</h4></div> :
            <div>
              {orderData.item_detail.map((item: any, index: any) => (
                <div className="product-checkout" key={index}>
                  <div className="card">
                    <div className="text">
                      <div className='text-2'>
                        <div className='quantity-1'>
                          <h1>{item.quantity}</h1>
                        </div>
                        <div className="text-3">
                          <h1>{item.name}</h1>
                          {
                            item.addmore2.length > 0 ? <div>
                              {item.addmore2.map((item: any) => (
                                <p>-{item}</p>
                              ))}
                            </div> : ""
                          }
                          {
                            item.addmore1.length > 0 ? <div>
                              {item.addmore1.map((item: any) => (
                                <p>-{item}</p>
                              ))}
                            </div> : ""
                          }
                          {
                            item.detail === "ไม่ได้เพิ่มรายละเอียด" ? "" : 
                            <p style={{marginTop : '4px'}}>-{item.detail}</p>
                          }
                        </div>
                      </div>
                      <div className="text-1">
                        <p>฿{item.price}</p>
                      </div>
                    </div>
                  </div>
                  <u></u>
                </div>
              ))}
              <div className="total-price-1">
                <div className="content">
                  <div className="check-out">
                    <div className="text">
                      <h1>TOTAL</h1>
                      <h1>฿ {orderData.price} </h1>
                    </div>
                    <div className="btn">
                      <Link to={`/resturant/${String(params.nameStore)}/homepage/${table_id}`}>
                        <button>สั่งอาหารเพิ่ม</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>

  )
}

export default CheckOutPage