import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
interface ContentProps {
  link : string,
  id : number
}
const Product : React.FC<ContentProps> = ({ link , id }) => {
  return (
    <Link to={`/${link}/products/product/${id}`} className='link'>
    <div className="card">
          <div className="img"><img src="https://framerusercontent.com/images/Fi1sEfoiyaABQ516O8D7j7Ao3w.webp" alt="" /></div>
          <div className="text">
            <h1>T-SHIRT MOCKUP</h1>
            <div className="text-1">
              <p>฿2000</p>
            </div>
          </div>
          <div className="icon">         
             <LuShoppingCart size={20} color='white' />
          </div>
        </div>
    </Link>
  )
}

export default Product