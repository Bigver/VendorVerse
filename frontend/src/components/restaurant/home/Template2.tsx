import React from 'react'


interface ContentProps {
    link: string;
    store_id: number;
    category: string[];
    image: string[]
}


const Template2: React.FC<ContentProps> = ({link , store_id}) => {
    return (
        <div className='home-ctn-5'>
            <div className="card-ctn">
                <div className="card">
                    <img src="https://img.wongnai.com/p/l/2017/11/27/de6df13f67284c978aca21e3a0c52218.jpg" alt="" />
                    <div className="text">
                        <a href={`/resturant/${link}/menus1/อาหารจานเดียว/${store_id}`}>อาหารจานเดียว</a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://img.wongnai.com/p/1920x0/2021/01/13/f001eab0c36742f2a0a36b5780db148b.jpg" alt="" />
                    <div className="text">
                        <a>ยำ</a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMt-i0iEpQTjuBCwcVXa-vS250HmfjXwksQ&s" alt="" />
                    <div className="text">
                        <a>ต้ม</a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://s359.kapook.com/rq/580/435/50/pagebuilder/d10d3774-d25d-478a-b479-a2314dcab48f.jpg" alt="" />
                    <div className="text">
                        <a>เครื่องดื่ม</a>
                    </div>
                </div>
                {/* <div className="card">
                    <img src="https://www.eatecon.com/wp-content/uploads/2019/09/papaya-salad-g476c5fb29_1920-1170x878.jpg" alt="" />
                    <div className="text">
                        <a>ส้มตำ</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Template2