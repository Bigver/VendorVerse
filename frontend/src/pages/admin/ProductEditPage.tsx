import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { requestMethod } from "../../requestMethod";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';

const ProductEditPage: React.FC = () => {


    const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
    const params = useParams();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${requestMethod}/product/find/${params.id}`);
          const jsonObject = {
            ...response.data,
            product_img: JSON.parse(response.data.product_img),
            product_more: JSON.parse(response.data.product_more)
          };
          setImages(jsonObject.product_img)
          setMore(jsonObject.product_more)
          setFormData({
            name: jsonObject.name,
            detail: jsonObject.detail,
            price: jsonObject.price,
            stock: jsonObject.stock,
            category: jsonObject.category
          })          
          setLoading(false)
        } catch (error) {
          console.log(error)
          // setError('Failed to fetch users');
        }
      };
      fetchData();
    }, []);

  const [formData, setFormData] = useState({
    name: '',
    detail: '',
    price: '',
    stock: '',
    category: ''
  });



  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const [newMore, setNewMore] = useState(''); // State สำหรับสีที่กำลังพิมพ์
  const [mores, setMore] = useState<string[]>([]); // State สำหรับเก็บสีทั้งหมด

  // ฟังก์ชันเพิ่มสีลงใน array
  const handleAddColor = () => {
    if (newMore && !mores.includes(newMore)) {
      setMore([...mores, newMore]);
      setNewMore(''); // เคลียร์ช่อง input หลังจากเพิ่มสีแล้ว
    }
  };

  // ฟังก์ชันลบสีออกจาก array
  const handleRemoveMore = (more: string) => {
    setMore(mores.filter((c) => c !== more));
  };



  // ฟังก์ชันลบสีออกจาก array
  const [images, setImages] = useState<string[]>([]);;

  const handleRemoveImage = (image: string) => {
    setImages(images.filter((c) => c !== image));
  };


  const uploadFileHandler = async (e: any) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      const { data } = await axios.post(`${requestMethod}/uploadFile`, 
        bodyFormData, 
      );
      setImages([...images,data.secure_url]);
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error('Image uploaded fail');
    }
  };




  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${requestMethod}/product/edit/${params.id}`, {
        name: formData.name,
        product_img: images,
        price: formData.price,
        product_more: mores,
        detail : formData.detail,
        stock : formData.stock,
        category : formData.category
      });
      if (response.status === 200) {
        Swal.fire({
          title: "update product success",
          icon: "success",
        })}
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };


  return (
    <div className="app-ecommerce container-xxl container-p-y flex-grow">
      <h4 className="py-3 mb-4"><span className="text-muted fw-light">Product /</span> Add Product</h4>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Add Product Details</h5>
            </div>
            {loading ? "LOADING" :
            <>
            <form className="card-body form-about" id="myForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="imageUpload">Upload Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="imageUpload"
                  accept="image/*"
                  onChange={uploadFileHandler}
                />
                {images.map((image, index) => (
                          <li key={index} className="flex justify-between items-center">
                            <span>{image}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(image)}
                              className="bg-red-500 text-white py-2 px-4 mt-2 rounded hover:bg-red-600"
                            >
                              Remove
                            </button>
                          </li>
                  ))}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="title">name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name='name'
                  placeholder="Enter product title"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name='detail'
                  placeholder="Enter product description"
                  value={formData.detail}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name='price'
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="stock">Stock</label>
                <input
                  type="number"
                  className="form-control"
                  id="stock"
                  name='stock'
                  placeholder="stock"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="price">เพิ่มเติม (size , color)</label>
                <div className='d-flex'>
                  <input
                    type="text"
                    id="newColor"
                    value={newMore}
                    onChange={(e) => setNewMore(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full mr-2"
                    placeholder="Type a color"
                  />
                  <button
                    type="button"
                    onClick={handleAddColor}
                    className="bg-green-500 text-white py-2 px-4 mt-2 rounded hover:bg-green-600"
                  >
                    Add
                  </button>
                </div>
                <div className="show">
                  {mores.length > 0 && (
                    <div className="mb-4 mt-1 p-2">
                      <ul className="list-disc list-inside">
                        {mores.map((more, index) => (
                          <li key={index} className="flex justify-between items-center">
                            <span>{more}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveMore(more)}
                              className="bg-red-500 text-white py-2 px-4 mt-2 rounded hover:bg-red-600"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="Category">Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="Category"
                  name='category'
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary waves-effect waves-light mt-3">Submit</button>
            </form>
            </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEditPage;
