import Navbar from '../../components/restaurant/Navbar'
import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

type Item = {
  name: string;
  price: number;
};
const MenuPage: React.FC = () => {
  const params = useParams();

  const [productData, setProductData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/resturant/menu/find/${params.id}`);
        const jsonObject = {
          ...response.data,
          product_img: JSON.parse(response.data.product_img),
          product_more: JSON.parse(response.data.product_more),
          product_special: JSON.parse(response.data.product_special)
        };
        setProductData(jsonObject);
        setLoading(false)
      } catch (error) {
        toast.error("error")
      }
    };
    fetchData();
  }, []);

  const [selectedItems1, setSelectedItems1] = useState<Item[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, item: Item) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedItems1((prevItems) => [...prevItems, item]);
    } else {
      setSelectedItems1((prevItems) => prevItems.filter((i) => i.name !== item.name));
    }
  };


  const [selectedItems2, setSelectedItems2] = useState<Item[]>([]);
  const handleCheckboxChange2 = (event: React.ChangeEvent<HTMLInputElement>, item: Item) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedItems2((prevItems) => [...prevItems, item]);
    } else {
      setSelectedItems2((prevItems) => prevItems.filter((i) => i.name !== item.name));
    }
  };

  const totalPrice1 = selectedItems1.reduce((acc, item) => acc + item.price, 0);
  const totalPrice2 = selectedItems1.reduce((acc, item) => acc + item.price, 0);

  const nameItem1 : any[] = selectedItems1.map((item: any) => item.name);
  const nameItem2 : any[]= selectedItems2.map((item: any) => item.name);

  const [detail , setDetail] = useState('ไม่ได้เพิ่มรายละเอียด')
  const [quantity, setQuantity] = useState(1);
  const price = (productData.price * 1) + totalPrice1 + totalPrice2

  const increase = () => {
    setQuantity(quantity + 1)
  }
  const decrease = () => {
    if (quantity <= 1) {
      setQuantity(1)
    } else {
      setQuantity(quantity - 1)
    }
  }


  const outStock = () => {
    toast.error('สินค้าหมด');
  }

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItemsResturant");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItemsResturant", JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = (item: any) => {
    try {
      setCartItems([
        ...cartItems,
        {
          id: item.id,
          image: item.product_img[0],
          name: item.name,
          price: price,
          quantity: quantity,
          nameItem1: nameItem1,
          nameItem2: nameItem2,
          detail : detail
        },
      ]);
      window.location.href = `/resturant/${params.nameStore}/cart`
    } catch {
      toast.error('error');
    }
  }
  return (
    <div>
      <Navbar logo="" link={String(params.nameStore)} />
      {loading ? "LOADING" :
        <div className='menu-ctn'>
          <div className="menu-card">
            <div className="img"><img src={productData.product_img[0]} alt="" /></div>
            <div className="text">
              <h1>{productData.name}</h1>
            </div>
          </div>
          <div className="topping">
            <div className="text">
              <h1>ท๊อปปิ้ง</h1>
            </div>
            <form action="">
              {productData.product_more.length > 0 ? <div>
                {productData.product_more.map((item: any) => (
                  <div className="check-ctn">
                    <div className='check'>
                      <input
                        type="checkbox"
                        name={item.name}
                        value={item.name} // ควรเป็น value ของ checkbox ที่ต้องการส่ง เช่น name หรือ id
                        onChange={(e) => handleCheckboxChange(e, { name: item.name, price: item.price })} // ส่ง object ให้ถูกต้อง
                      />
                      <label htmlFor="">{item.name}</label>
                    </div>
                    <h2>฿{item.price}</h2>
                  </div>
                ))}
              </div> : ""}
            </form>
          </div>
          <div className="special">

            <form action="">
              {productData.product_special.length > 0 ? <div>
                <div className="text">
                  <h1>พิเศษ</h1>
                </div>
                {productData.product_special.map((item: any) => (
                  <div className="check-ctn">
                    <div className='check'>
                      <input
                        type="checkbox"
                        name={item.name}
                        value={item.name} // ควรเป็น value ของ checkbox ที่ต้องการส่ง เช่น name หรือ id
                        onChange={(e) => handleCheckboxChange2(e, { name: item.name, price: item.price })} // ส่ง object ให้ถูกต้อง
                      />
                      <label htmlFor="">{item.name}</label>
                    </div>
                    <h2>฿{item.price}</h2>
                  </div>
                ))}
              </div> : ""}
            </form>
          </div>
          <div className="detail-more">
            <div className="text">
              <h1>รายละเอียดเพิ่มเติม</h1>
            </div>
            <form action="">
              <input type="text" name='detail' placeholder='เช่นไม่เอาผัก' onChange={(e) => setDetail(e.target.value)} />
            </form>
          </div>
          <div className="add-to-cart">
            <div className="quantity">
              <a onClick={decrease}>-</a>
              <h1>{quantity}</h1>
              <a onClick={increase}>+</a>
            </div>
            <div className="btn">
              {productData.status === 'out_stock' ? <button onClick={outStock}>สินค้าหมด</button>:
                <button onClick={() => addToCart(productData)}>ใส่ตระกร้า<span>฿{price}</span></button>
              }
            </div>
          </div>
        </div>}
    </div>
  )
}

export default MenuPage