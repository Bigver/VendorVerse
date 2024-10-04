import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
interface ContentProps {
  link: string,
  id: number,
  name: string,
  product_img: string[],
  price: number;
  stock: number
}
const ProductPopular: React.FC<ContentProps> = ({ link, id, name, product_img, price, stock }) => {
  return (
    <Link to={`/store/${link}/products/product/${id}`} className='link'>
      <div className="card">
        <div className="img"><img src={product_img[0]} alt="" /></div>
        <div className="text">
          <h3>{name}</h3>
          <div className="text-1">
            <p>฿{price}</p>
          </div>
        </div>
        {
          stock <= 0 ? 
          <div className="out-stock">
            <h1>สินค้าหมด</h1>
          </div>
            : ""
        }

      </div>
    </Link>
  )
}

export default ProductPopular