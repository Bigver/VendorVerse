import React from 'react'
import img1 from '../../../../assets/content3.3.png'

const Content_3 = () => {
    return (
        <div className="feature" style={{ height: "100vh" }}>
            <div className="text">
                <h2>เริ่มต้นใช้งานทันที</h2>
                <h3>ใช้เวลาเพียงไม่กี่นาที</h3>
                <p> สมัครสมาชิกวันนี้และสร้างหน้าเพจธุรกิจของคุณเองในไม่กี่นาที แล้วมาร่วมเติบโตไปกับเราใน VendorVerse</p>
                <button>ดูรายละเอียด</button>
            </div>
            <img src={img1} alt="" />
        </div>
    )
}

export default Content_3