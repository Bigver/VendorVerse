import React, { useState } from 'react'
import Navbar from '../../components/shopingStore/Navbar';
import Popular from '../../components/shopingStore/Popular';
import Footer from '../../components/shopingStore/Footer';

const ProductPage = () => {
  const product: any = {
    images: ["https://framerusercontent.com/images/k76iXSV1CBYxuOmUv7E9rBP8.jpeg?scale-down-to=512", "https://framerusercontent.com/images/P6yflZ0Lkq2EHe4M1CQ5VNiILY.webp", "https://framerusercontent.com/images/K5Pw6r2dwkVZiZ9OezmVUrsF47M.webp"],
    name: "T-Shirt Mockup With Sand",
    brand: "Sand",
    description: "Lolem",
    price: 300
  }
  const [index, setIndex] = useState(0);
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData)
  return (
    <div>
        <Navbar logo={data.logo} category={JSON.parse(data.categoty)} link={data.name_store}/>
        <div className='container-product' data-aos="zoom-in" data-aos-duration="1000">
        <div className="product-detail-container">
          <div className="product">
            <div className='img-pd'>
              <div className="image-container">
                <img src={product.images && product.images[index]} className="product-detail-image" />
              </div>
              <div className="small-images-container">
                {product.images?.map((item: any, i: any) => (
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
              <h1>{product.name}<span>({product.brand})</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa magni sequi sapiente eum eveniet cum numquam placeat quasi aliquam temporibus ducimus assumenda voluptatibus, corporis laboriosam, soluta ipsam. Ipsa, quidem beatae!</p>
              <p>฿{product.price}</p>
              <div className='btn'>
                <button>ADD TO CARD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <div className="marquee">
          <div className="maylike-products-container track">
            <div className="card">
              <div className="img">
                <div className="new">
                  <h1>new</h1>
                </div>
                <img src="https://framerusercontent.com/images/fS7nnc0wLGk06KzAmXWbBfjX99k.webp" alt="" />
              </div>
              <div className="text-1">
                <h1>T-SHIRT MOCKUP</h1>
                <p>฿900</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <div className="new">
                  <h1>new</h1>
                </div>
                <img src="https://framerusercontent.com/images/fS7nnc0wLGk06KzAmXWbBfjX99k.webp" alt="" />
              </div>
              <div className="text-1">
                <h1>T-SHIRT MOCKUP</h1>
                <p>฿900</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <div className="new">
                  <h1>new</h1>
                </div>
                <img src="https://framerusercontent.com/images/fS7nnc0wLGk06KzAmXWbBfjX99k.webp" alt="" />
              </div>
              <div className="text-1">
                <h1>T-SHIRT MOCKUP</h1>
                <p>฿900</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <div className="new">
                  <h1>new</h1>
                </div>
                <img src="https://framerusercontent.com/images/fS7nnc0wLGk06KzAmXWbBfjX99k.webp" alt="" />
              </div>
              <div className="text-1">
                <h1>T-SHIRT MOCKUP</h1>
                <p>฿900</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <div className="new">
                  <h1>new</h1>
                </div>
                <img src="https://framerusercontent.com/images/fS7nnc0wLGk06KzAmXWbBfjX99k.webp" alt="" />
              </div>
              <div className="text-1">
                <h1>T-SHIRT MOCKUP</h1>
                <p>฿900</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <div className="new">
                  <h1>new</h1>
                </div>
                <img src="https://framerusercontent.com/images/fS7nnc0wLGk06KzAmXWbBfjX99k.webp" alt="" />
              </div>
              <div className="text-1">
                <h1>T-SHIRT MOCKUP</h1>
                <p>฿900</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <div className="new">
                  <h1>new</h1>
                </div>
                <img src="https://framerusercontent.com/images/fS7nnc0wLGk06KzAmXWbBfjX99k.webp" alt="" />
              </div>
              <div className="text-1">
                <h1>T-SHIRT MOCKUP</h1>
                <p>฿900</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <div className="new">
                  <h1>new</h1>
                </div>
                <img src="https://framerusercontent.com/images/fS7nnc0wLGk06KzAmXWbBfjX99k.webp" alt="" />
              </div>
              <div className="text-1">
                <h1>T-SHIRT MOCKUP</h1>
                <p>฿900</p>
              </div>
            </div>  <div className="card">
              <div className="img">
                <div className="new">
                  <h1>new</h1>
                </div>
                <img src="https://framerusercontent.com/images/fS7nnc0wLGk06KzAmXWbBfjX99k.webp" alt="" />
              </div>
              <div className="text-1">
                <h1>T-SHIRT MOCKUP</h1>
                <p>฿900</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>)
}

export default ProductPage