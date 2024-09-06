import React from 'react'
import Navbar from '../../components/shopingStore/Navbar'
import Swal from 'sweetalert2'

const Information = () => {
  const handleSubmit = (e:any) =>{
    e.preventDefault();
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }
  const pageData: any = localStorage.getItem('pageData');
  const data = JSON.parse(pageData)
  return (
    <div>
      <Navbar logo={data.logo} category={JSON.parse(data.categoty)} link={data.name_store} />
      <div className="information-ctn">
          <form onSubmit={handleSubmit}>
          <h1>กรอกข้อมูลเพื่อทำการจัดส่งสินค้า</h1>
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">ชื่อ-นามสกุล</label>
            <input type="text" />
            <label htmlFor="">เบอร์โทร</label>
            <input type="text" />
            <label htmlFor="">ที่อยู่ในการจัดส่ง</label>
            <textarea  />
            <label htmlFor="">สลิปการโอนเงิน</label>
            <input type="file" />
            <button type='submit'>สั่งซื้อ</button>
          </form>
        </div>
    </div>
  )
}

export default Information