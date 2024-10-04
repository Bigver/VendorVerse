import React, { useState, useEffect } from 'react'
import Navbar from '../../components/shopingStore/Navbar';
import Popular from '../../components/shopingStore/Popular';
import Footer from '../../components/shopingStore/Footer';
import { requestMethod } from "../../requestMethod";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const [index, setIndex] = useState(0);
  const pageData: any = localStorage.getItem('pageData');
  const params = useParams();

  const data = JSON.parse(pageData)

  const [productData, setProductData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${requestMethod}/product/find/${params.id}`);
        const jsonObject = {
          ...response.data,
          product_img: JSON.parse(response.data.product_img),
          product_more: JSON.parse(response.data.product_more)
        };

        setProductData(jsonObject);
        setLoading(false)
      } catch (error) {
        toast.error("error")
      }
    };
    fetchData();
  }, []);


  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItemsStore");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItemsStore", JSON.stringify(cartItems));
  }, [cartItems]);

  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const [quantity, setQuantity] = useState(1)
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


  const addToCart = (item: any) => {
    try {
      setCartItems([
        ...cartItems,
        {
          id: item.id,
          image: item.product_img[0],
          name: item.name,
          price: item.price,
          quantity: quantity,
          stock: productData.stock,
          option: selectedOption
        },
      ]);
      toast.success('ADD TO CART');
      window.location.href = `/${data.name_store}/cart`
    } catch {
      toast.error('error');
    }

  }

  return (
    <div>
      <Navbar logo={data.logo} category={data.category} link={data.name_store} />
      <div className='container-product' data-aos="zoom-in" data-aos-duration="1000">
        <div className="product-detail-container">
          {loading ? "LOADING" :
            <>
              <div className="product">
                <div className='img-pd'>
                  <div className="image-container">
                    <img src={productData.product_img && productData.product_img[index]} className="product-detail-image" />
                  </div>
                  <div className="small-images-container">
                    {productData.product_img?.map((item: any, i: any) => (
                      <img
                        key={i}
                        src={item}
                        className={i === index ? 'small-image selected-image' : 'small-image'}
                        onMouseEnter={() => setIndex(i)}
                      />
                    ))}
                  </div>
                </div>
                <div className='text'>
                  <h1>{productData.name}</h1>
                  <p>{productData.detail} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quia fugiat deleniti mollitia a voluptates doloremque error. Corrupti in earum similique, ratione quidem illum maiores porro. Incidunt enim reprehenderit aperiam.</p>
                  <h2>฿{productData.price}</h2>
                  <div className='select'>
                    <select value={selectedOption} onChange={handleChange}>
                      <option value="" disabled>Select an option</option>
                      {productData.product_more.map((option: any) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='btn-ctn'>
                    <div className="quantity">
                      <a onClick={decrease}>-</a>
                      <h3>{quantity}</h3>
                      {quantity >= productData.stock ? <a >+</a> :
                        <a onClick={increase}>+</a>
                      }
                    </div>
                    <div className='btn'>
                      {productData.stock <= 0 ? <button onClick={outStock}>ADD TO CARD</button>  :
                        <button onClick={() => addToCart(productData)}>ADD TO CARD</button>
                      }
                    </div>
                  </div>

                </div>
              </div>
            </>}
        </div>
      </div>
      <Popular />
      <Footer logo={data.logo} category={data.category} link={data.name_store} link_contact={[data.link_facebook, data.link_instragram, data.link_line]} detail={data.detail_footer} />
    </div>)
}

export default ProductPage