import React from 'react'
import user from '../../../assets/user.png'
import select from '../../../assets/select.png'
import store from '../../../assets/store.png'
import cart from '../../../assets/cart.png'
import complete from '../../../assets/complete.png'


const Content2 = () => {
    return (
        <section className='content-2'>
            <div>
                <div className="text">
                    <h1 data-aos="fade-right">ขั้นตอนการใช้งาน</h1>
                </div>
                <div className="content">
                    <div className="step">
                        <div className="img"><img src={user} alt="" /></div>
                        <h3>สมัครสมาชิก</h3>
                    </div>
                    <div className="step">
                        <div className="img"><img src={cart} alt="" /></div>
                        <h3>เลือกแพคเก็จ</h3>
                    </div>
                    <div className="step">
                        <div className="img"><img src={select} alt="" /></div>
                        <h3>เลือกเว็บไซต์ที่จะใช้งาน</h3>
                    </div>
                    <div className="step">
                        <div className="img"><img src={store} alt="" /></div>
                        <h3>กรอกข้อมูลลงเว็บไซต์</h3>
                    </div>
                    <div className="step">
                        <div className="img"><img src={complete} alt="" /></div>
                        <h3>เสร็จสิ้น</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Content2