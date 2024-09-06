import React from 'react'
import { GoChevronDown } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Filter = () => {
    return (
        <div className='filter-ctn'>
            <div className='filter'>
                <div className="haeder">
                    <h1>FILTER</h1>
                </div>
                <div className="filter1">
                    <h1>category</h1>
                    <GoChevronDown />
                </div>
                <div className="filter1">
                    <h1>price</h1>
                    <GoChevronDown />
                </div>
                <div className="filter1">
                        <input type="text" placeholder='ค้นหาสินค้า' />
                        <div className='icon'><IoSearchOutline size={20} /></div>
                </div>
            </div>
        </div>
    )
}

export default Filter