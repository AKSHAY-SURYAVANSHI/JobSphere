import React from 'react';
import './JobCard.css';
import { MapPin, Building, IndianRupee ,Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job_id, title, company, location, salary, employment_type, description, skills,workMode }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate(`/apply`, {
      state: { job_id, title, company, location, employment_type, salary, skills, workMode,description},
    });
  };

  return (
    <div className="job-card">
      <div className="job-info">
        <h2 className="job-title">{title}</h2>
        <div className="job-details">
          <p className="job-company">
            <Building className="icon" /> {company}
          </p>
          <p className="job-location">
            <MapPin className="icon" /> {location}
          </p>
          <p className="job-salary">
            <IndianRupee className="icon" /> {salary}
          </p>
          <p className="job-employment-type">
          <Briefcase className="icon" />{employment_type}
          </p>
        </div>
      </div>
      <button className="apply-button" onClick={handleApplyClick}>Apply Now</button>
    </div>
  );
};

export default JobCard;