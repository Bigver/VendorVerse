import React ,{useState} from 'react'
import Navbar from '../../components/shopingStore/Navbar'
import { Link } from "react-router-dom";
import { IoTrashBinOutline } from "react-icons/io5";
import Footer from '../../components/shopingStore/Footer';

const CartPage = () => {
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData)
  return (
    <div>
      <Navbar logo={data.logo} category={JSON.parse(data.categoty)} link={data.name_store} />
      <div className="cart-ctn1">
        <div className="cart">
          <div className="product">
            <div className="card">
              <div className="img"><img src="data:image/jpeg;base64,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" alt="" /></div>
              <div className="text">
                <h1>T-SHIRT MOCKUP</h1>
                <div className="text-1">
                  <p>฿2000</p>
                </div>
                <div className="quantity">
                  <h2>QUANTITY</h2>
                  <button>-</button>
                  <h3>3</h3>
                  <button>+</button>
                </div>
                <a className='del'><IoTrashBinOutline size={20} color='red' /></a>
              </div>
            </div>
            <u></u>
          </div>
          <div className="product">
            <div className="card">
              <div className="img"><img src="data:image/jpeg;base64,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" alt="" /></div>
              <div className="text">
                <h1>T-SHIRT MOCKUP</h1>
                <div className="text-1">
                  <p>฿2000</p>
                </div>
                <div className="quantity">
                  <h2>QUANTITY</h2>
                  <button>-</button>
                  <h3>3</h3>
                  <button>+</button>
                </div>
                <a className='del'><IoTrashBinOutline size={20} color='red' /></a>
              </div>
            </div>
            <u></u>
          </div>
          <div className="product">
            <div className="card">
              <div className="img"><img src="data:image/jpeg;base64,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" alt="" /></div>
              <div className="text">
                <h1>T-SHIRT MOCKUP</h1>
                <div className="text-1">
                  <p>฿2000</p>
                </div>
                <div className="quantity">
                  <h2>QUANTITY</h2>
                  <button>-</button>
                  <h3>3</h3>
                  <button>+</button>
                </div>
                <a className='del'><IoTrashBinOutline size={20} color='red' /></a>
              </div>
            </div>
            <u></u>
          </div>
          <div className="product">
            <div className="card">
              <div className="img"><img src="data:image/jpeg;base64,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" alt="" /></div>
              <div className="text">
                <h1>T-SHIRT MOCKUP</h1>
                <div className="text-1">
                  <p>฿2000</p>
                </div>
                <div className="quantity">
                  <h2>QUANTITY</h2>
                  <button>-</button>
                  <h3>3</h3>
                  <button>+</button>
                </div>
                <a className='del'><IoTrashBinOutline size={20} color='red' /></a>
              </div>
            </div>
            <u></u>
          </div>
        </div>

        <div className="total-price">
          <div className="content">
            <div className='text-ctn'>
              <div className="text">
                <h1>T-SHIRT MOCKUP</h1>
                <h1>฿ 200</h1>
              </div>
              <div className="text">
                <h1>T-SHIRT MOCKUP</h1>
                <h1>฿ 200</h1>
              </div>
              <div className="text">
                <h1>T-SHIRT MOCKUP</h1>
                <h1>฿ 200</h1>
              </div>
              <div className="text">
                <h1>T-SHIRT MOCKUP</h1>
                <h1>฿ 200</h1>
              </div>    <div className="text">
                <h1>T-SHIRT MOCKUP</h1>
                <h1>฿ 200</h1>
              </div>    <div className="text">
                <h1>T-SHIRT MOCKUP</h1>
                <h1>฿ 200</h1>
              </div>
              <u></u>
            </div>
            <div className="check-out">
              <div className="text">
                <h1>TOTAL</h1>
                <h1>฿ 6000</h1>
              </div>
              <Link to={`/${data.name_store}/information`} className='link'>
                <button>CHECK OUT</button>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CartPage