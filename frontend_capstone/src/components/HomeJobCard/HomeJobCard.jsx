import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomeJobCard.css';
import JobCard from '../JobCard/JobCard';
import { Link } from 'react-router';

const HomeJobCard = () => {
  const [jobs, setJobs] = useState([]);

  const fetchAllJobs = () => {
    axios.get('http://localhost:3000/jobs')
      .then((response) => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <div className="jobs-list">
      <div className="jobs-heading-container">
        <div className="heading-left">
          <h1 className="jobs-heading">Featured Jobs</h1>
          <p>Know your worth and find the job that qualifies your life ...</p>
        </div>
        <Link to='/jobcardlist' className="see-more-jobs-button">See More Jobs</Link>
      </div>

      <div className="job-cards-container">
        {jobs.slice(0, 6).map(job => (
          <JobCard
          key={job.job_id}
          job_id={job.job_id}
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
          employment_type={job.employementType} 
          skills = {job.skills}
          workMode = {job.workMode}
          description = {job.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeJobCard;
