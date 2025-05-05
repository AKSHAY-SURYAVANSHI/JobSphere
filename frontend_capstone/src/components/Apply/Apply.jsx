import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Apply.css';
import { AuthContext } from '../../context/AuthContext'; // Adjust the path if needed
import { toast } from 'react-toastify';

const Apply = () => {
  const location = useLocation();
  const { job_id, title, company, location: jobLocation, description, salary, employment_type, skills, workMode } = location.state || {};
  
  const { user } = useContext(AuthContext) || {}; // Ensure user is defined
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const applicationData = {
      name,
      email,
      job: {
        job_id,
        
      }, 
      user: user && user.userId ? { userId: user.userId } : null, // Ensure userId is passed correctly
    };
    console.log('Application Data:', applicationData);
    try {
      const response = await axios.post('http://localhost:3000/applications', applicationData);
      
      console.log('Response:', response.data);
      toast.success("Application submitted successfully !!!",{
                  autoClose:1000
              })
      
    } catch (error) {
      console.error('Error submitting application:', error);
      
      toast.success("Failed to submit the application. Please try again.",{
                  autoClose:1000
              })
    }
  };

  return (
    <div className="applybody">
    <div className="apply-page">
      <div className="job-details">
        <h2>{title}</h2>
        <p><strong>Job ID:</strong> {job_id}</p>
        <p><strong>Company:</strong> {company}</p>
        <p><strong>Location:</strong> {jobLocation}</p>
        <p><strong>Salary:</strong> ₹{salary}</p>
        <p><strong>Employment Type:</strong> {employment_type}</p>
        <p><strong>Skill:</strong> {skills}</p>
        <p><strong>Work Mode:</strong> {workMode}</p>
        <p><strong>Description:</strong> {description}</p>
      </div>
      <form className="apply-form" onSubmit={handleSubmit}>
        <h3>Apply for this Job</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Apply;