import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JobCards.css';
import JobCard from './JobCard';

const JobCards = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/jobs')
      .then((response) => {
        setJobs(response.data);
        setFilteredJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = () => {
    let result = [...jobs];

    if (searchTerm) {
      result = result.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLocations.length > 0) {
      result = result.filter(job =>
        selectedLocations.includes(job.location)
      );
    }

    if (selectedEmploymentTypes.length > 0) {
      result = result.filter(job =>
        selectedEmploymentTypes.includes(job.employementType) 
      );
    }

    setFilteredJobs(result); 
  };

  useEffect(() => {
    handleFilterChange();
  }, [searchTerm, selectedLocations, selectedEmploymentTypes]);

  const handleCheckboxChange = (e, type) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (type === 'location') {
      setSelectedLocations(prev =>
        isChecked ? [...prev, value] : prev.filter(item => item !== value)
      );
    } else if (type === 'employment_type') {
      setSelectedEmploymentTypes(prev =>
        isChecked ? [...prev, value] : prev.filter(item => item !== value)
      );
    }
  };

  
  const locations = [...new Set(jobs.map(job => job.location))];
  const employmentTypes = [...new Set(jobs.map(job => job.employementType))]; 

  return (
    <div className="jobs-wrapper">
      <div className="filter-section">
        <h3>Role :</h3>
        <div className="filter-group">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Enter the Role..."
            className="search-input"
          />
        </div>

        

        <div className="filter-group">
          <h3>Employment Type :</h3>
          {employmentTypes.map((type, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={type}
                onChange={(e) => handleCheckboxChange(e, 'employment_type')}
              />
              <label>{type}</label>
            </div>
          ))}
        </div>

        <div className="filter-group">
          <h3>Location :</h3>
          {locations.map((location, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={location}
                onChange={(e) => handleCheckboxChange(e, 'location')}
              />
              <label>{location}</label>
            </div>
          ))}
        </div>
      </div>

      

      <div className="cards-section">
        <h1 className="jobs-heading">Available Jobs</h1>
        <div className="job-cards-container">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard
                key={job.job_id}
                job_id={job.job_id}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                employment_type={job.employementType} 
                skills={job.skills}
                workMode={job.workMode}
                description={job.description}
              />
            ))
          ) : (
            <p>No matching jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCards;