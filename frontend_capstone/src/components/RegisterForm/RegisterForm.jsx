import React, { useState } from 'react';
import './RegisterForm.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios!
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear any previous error
    setError('');

    // Set loading state while the request is processing
    setLoading(true);

    try {
      // Send registration data to the backend using axios
      const response = await axios.post('http://localhost:3000/users', {
        firstname : firstName,
        lastname : lastName,
        email,
        password,
      });

      // Handle success response (for example, redirecting to login)
      if (response.status === 200) {
        navigate('/login'); // Redirect to login page after successful registration
        toast.success("Register successful !!!",{
            autoClose:1000
        })
      }
    } catch (err) {
      // Handle error (for example, display error message)
      setError('An error occurred while registering. Please try again.');
    } finally {
      // Set loading state back to false after the request is done
      setLoading(false);
    }
  };

  return (
    <div className="register-signInContainer">
      
      <form className="register-form" onSubmit={handleRegister}>
        <h1>REGISTER FORM</h1>
        <label className="register-label">First Name</label><br />
        <input
          className="register-input"
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        
        <label className="register-label">Last Name</label><br />
        <input
          className="register-input"
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        
        <label className="register-label">Email</label><br />
        <input
          className="register-input"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        
        <label className="register-label">Password</label><br />
        <input
          className="register-input"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        
        <label className="register-label">Confirm Password</label><br />
        <input
          className="register-input"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />

        <button className="register-button" type="submit" disabled={loading}>
          REGISTER
        </button>

        {error && <p className="register-error">{error}</p>}

        <div className="register-login">
          <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
