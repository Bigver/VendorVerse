import React, { useState } from 'react';
import bg1 from '../../assets/login.png'
import Navbar from '../../components/main/Navbar'
import axios from 'axios';
import { requestMethod } from "../../requestMethod";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e:any) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      await axios.post(`${requestMethod}/users/register`, { email, password , phone , username });
      toast.success('register successfu');
      navigate('/login')
    } catch (error) {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div>
      <Navbar nav="navbar-ctn" />
      <div className='login-ctn'>
        <div className='card'>
          <div className='register'>
            <div className="text">
              <h1>ยินดีต้อนรับสู่ VendorVerse</h1>
              <p>กรอกรายละเอียดส่วนตัวของคุณและเริ่มการเดินทางไปกับเรา</p>
              <img src={bg1} alt="" />
            </div>
          </div>
          <div className='login'>
            <div className="header">
              <h1>Sign up</h1>
            </div>
            <div className="form">
              <form className='form-register' onSubmit={handleRegister}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder='username' />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='email' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='password' />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder='confirm password' />
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder='phone' />
                <a href='login'>Sign in</a>
                <button type='submit'>SIGN UP</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage