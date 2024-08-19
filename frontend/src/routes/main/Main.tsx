import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../../styles/main/main.scss'
import HomePage from "../../pages/main/HomePage";
import LoginPage from "../../pages/main/LoginPage";
import RegisterPage from "../../pages/main/RegisterPage";
import PackagePage from "../../pages/main/PackagePage";
import PaymentPage from "../../pages/main/Step2Page";
import { SelectWebPage } from "../../pages/main/Step3Page";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StepPage from "../../pages/main/Step1Page";
import Step4Page from "../../pages/main/Step4Page";
import Step5Page from "../../pages/main/Step5Page";

const Main = () => {
  return (
    <BrowserRouter>
        <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/package" element={<PackagePage />} />
          <Route path="/step1" element={<StepPage />} />        
          <Route path="/step2" element={<PaymentPage />} />
          <Route path="/step3" element={<SelectWebPage />} /> 
          <Route path="/step4" element={<Step4Page />} /> 
          <Route path="/step5" element={<Step5Page />} /> 
        </Routes>
    </BrowserRouter>
  );
};

export default Main;
