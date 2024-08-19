import React, { useState } from 'react';
import axios from 'axios';
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Navbar from '../../components/main/Navbar';
import { requestMethod } from "../../requestMethod";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${requestMethod}/users/login`, { email, password });
      localStorage.setItem('token', response.data.token); // เก็บ token ใน local storage
      navigate('/')
      toast.success('Login successful');
    } catch (error) {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div>
      <Navbar nav="navbar-ctn"/>
      <div className='login-ctn'>
        <div className='card'>
          <div className='login'>
            <div className="header">
              <h1>Sign in</h1>
              <div className='contact'>
                <div className='circle'><SiGmail size={26} /></div>
                <div className='circle'><FaFacebookF size={26} /></div>
                <div className='circle'><FaGithub size={26} /></div>
              </div>
              <h4>or use your account</h4>
            </div>
            <div className='form'>
              <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='email' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='password' />
                <a href=''>forger password?</a>
                <button type='submit'>SIGN IN</button>
              </form>
            </div>
          </div>
          <div className='register'>
            <div className="text">
              <h1>ยินดีต้อนรับสู่ VendorVerse</h1>
              <p>กรอกรายละเอียดส่วนตัวของคุณและเริ่มการเดินทางไปกับเรา</p>
              <div className='link'>
                <a href="/register">SIGN UP</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginPage