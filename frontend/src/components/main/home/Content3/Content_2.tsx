import React from 'react'
import img1 from '../../../../assets/admin.png'

const Content_2 = () => {
  return (
    <div className="feature" style={{ height : "100vh" }}>
    <img src={img1} alt="" style={{ marginRight: "60px" }} />
    <div className="text"><h2>รายงานยอดขาย</h2>
        <h3>มีระบบหลังบ้านที่ครอบคลุม</h3>
        <p>จัดการร้านของคุณได้อย่างมีประสิทธิภาพด้วยระบบการจัดการสินค้า การรับออเดอร์ การชำระเงินที่สะดวกสบาย การอัพเดทหน้าเว็บ สินค้าได้ตลอด</p>
        <button>ดูรายละเอียด</button>
    </div>
</div>
  )
}

export default Content_2