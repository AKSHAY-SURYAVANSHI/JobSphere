import React, { useState, useContext } from 'react';

import { AuthContext } from '../../context/AuthContext'; // adjust path
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.get('http://localhost:3000/users');
      const users = res.data;

      const matchedUser = users.find(
        (user) => user.email === emailId && user.password === password
      );

      if (matchedUser) {
        login(matchedUser);
        navigate('/');
        toast.success("Login Successful !!!",{
          autoClose:1000
        })
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Something went wrong. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signInContainer">
      
      <form onSubmit={handleLogin}>
      <h1>LOGIN FORM</h1>
        <label>Email</label><br />
        <input
          type="email"
          placeholder="Enter email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        /><br />

        <label>Password</label><br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'LOGIN'}
        </button>

        {error && <p className="login-error">{error}</p>}

        <div className="createAccount">
          <Link to="/register">
            <p>Don't have an account? Register here</p>
          </Link>
        </div>

        <div className="tnc">
          <p>
            By logging in, you agree to our <br />
            <span>Terms of Service</span> | <span>Privacy Policy</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
