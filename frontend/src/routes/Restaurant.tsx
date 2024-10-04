import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "../pages/resturant/HomePage";
import '../styles/restaurant/main.scss'
import MenuPage from "../pages/resturant/MenuPage";
import CartPage from "../pages/resturant/CartPage";
import CheckOutPage from "../pages/resturant/CheckOutPage";
import MenusPage from "../pages/resturant/MenusPage";
import MenusPage2 from "../pages/resturant/MenusPage2";

const Restaurant = () => {
    return (
        <BrowserRouter>
            <ToastContainer position="bottom-center" limit={1} />
            <Routes>
                <Route path="/resturant/:nameStore/homepage/:table_id" element={<HomePage />} />
                <Route path="/resturant/:nameStore/product/:id" element={<MenuPage />} />
                <Route path="/resturant/:nameStore/cart" element={<CartPage />} />
                <Route path="/resturant/:nameStore/checkout" element={<CheckOutPage />} />
                <Route path="/resturant/:nameStore/menus1/:category/:store_id" element={<MenusPage />} />
                <Route path="/resturant/:nameStore/menus2/:store_id" element={<MenusPage2/>} />
           </Routes>
        </BrowserRouter>
    );
};

export default Restaurant;