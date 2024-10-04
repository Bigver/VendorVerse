import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "../pages/admin/Dashboard";
import AddProductPage from "../pages/admin/Addproduct";
import ProductListPage from "../pages/admin/ProductListPage";
import OrderPage from "../pages/admin/OrderListPage";
import EditPage from "../pages/admin/EditPage";
import ProductEditPage from "../pages/admin/ProductEditPage";

const Admin = () => {
  return (
    <div className="admin-ctn">
      <BrowserRouter>
        <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route path="/admin/product/add/:store_id" element={<AddProductPage />} />
          {/* <Route path="/admin/product/list/:store_id" element={<Dashboard />} /> */}
          <Route path="/admin/product/list/:store_id" element={<ProductListPage />} />
          <Route path="/admin/product/edit/:id" element={<ProductEditPage />} />
          {/* <Route path="/:store_id/admin/order/list" element={<OrderPage />} /> */}
          <Route path="/admin/page/edit/:nameStore" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Admin;