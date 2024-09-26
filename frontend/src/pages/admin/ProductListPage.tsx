import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { requestMethod } from "../../requestMethod";
import Product from '../../components/admin/Product';
import { toast } from 'react-toastify';

interface Product {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  status: string;
}


const ProductListPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [productData, setProductData]: any[] = useState([]);
  const [loading, setLoading] = useState(true); // สถานะสำหรับตรวจสอบการโหลด
  const params = useParams();
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${requestMethod}/product/findAll/${params.store_id}`);
        
        setProductData(response.data);
        setLoading(false)
      } catch (error) {
        console.log(error)
        // setError('Failed to fetch Products');
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentPage(1);
  };

  const handleDelete = async (productId: number) => {
    try {
      await axios.delete(`${requestMethod}/product/delete/${productId}`);
      toast.success('delete success');
    } catch (error) {
      toast.error('error');
    }
  };

  return (
    <div className="container ">
      <div className="header mb-4">
        <h1 className="display-4 text-center">Product List</h1>
        <div className="d-flex justify-content-between">
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
          <Link to="/products/addproduct" className="btn btn-secondary">Add Product</Link>
        </div>
      </div>

      <div className="row">
      {loading ? "LOADING" :
            <>
              {productData.map((item: any) => (
                <div key={item.id}>
                  <Product  id={item.id} name={item.name} product_img={JSON.parse(item.product_img)} price={item.price} stock={item.stock} detail={item.detail} onDelete={handleDelete}   />
                </div> // Assuming `id` and `name` are properties of `item`
              ))}
            </>}
      </div>


    </div>
  );
};

export default ProductListPage;
