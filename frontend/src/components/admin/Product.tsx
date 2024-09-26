import React from 'react'
import { Link } from "react-router-dom";
interface ContentProps {
    id: number,
    name: string,
    product_img: string[],
    price: number;
    stock: number;
    detail: string;
    onDelete: (id: number) => void; 
}
const Product: React.FC<ContentProps> = ({ id, name, product_img, price, stock, detail , onDelete }) => {
    return (
        <div className="col-md-4 mb-4" key={id}>
            <div className="card product-card">
                <img src={product_img[0]} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{detail.length > 100 ? `${detail.substring(0, 100)}...` : detail}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/admin/product/edit/${id}`} className="btn btn-primary btn-sm">Edit</Link>
                        <button className="btn btn-danger btn-sm" onClick={() => onDelete(id)}>Delete</button>
                        <span className={`badge ${status === 'Active' ? 'bg-success' : 'bg-warning'}`}>{status}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product