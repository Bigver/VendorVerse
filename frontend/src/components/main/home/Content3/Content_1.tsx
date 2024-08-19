import React from 'react'
import img1 from '../../../../assets/content3.2.png'

const Content_1 = () => {
    return (
        <div className="feature" style={{ height : "100vh" }}>
            <div className="text">
                <h2>ใช้งานสะดวก</h2>
                <h3>eCommerce ที่ครบวงจร</h3>
                <p>สร้างและจัดการร้านค้าออนไลน์ของคุณได้ง่ายด้วยเครื่องมือที่ใช้งานง่าย ปรับแต่งหน้าร้าน จัดการสต็อกสินค้า ประมวลผลการชำระเงิน และติดตามคำสั่งซื้อในที่เดียว</p>
                <button>ดูรายละเอียด</button>
            </div>
            <img src={img1} alt="" />
        </div>
    )
}

export default Content_1