import React from 'react';
import './TrustedCompanies.css';
import amazonLogo from '../../assets/amazonLogo.png'; // Adjust the path if needed
import ibmLogo from '../../assets/ibmLogo.png'; // Adjust the path if needed
import microsoftLogo from '../../assets/microsoftLogo.png'; // Adjust the path if needed
import facebookLogo from '../../assets/ascendionLogo.png'; // Adjust the path if needed
import tcsLogo from '../../assets/tcsLogo.png'; // Adjust the path if needed

const TrustedCompanies = () => {
  const logos = [
    { src: amazonLogo, alt: 'Amazon Logo' },
    { src: ibmLogo, alt: 'IBM Logo' },
    { src: microsoftLogo, alt: 'Microsoft Logo' },
    { src: facebookLogo, alt: 'Facebook Logo' },
    { src: tcsLogo, alt: 'Facebook Logo' },
  ];

  return (
    <div className="trusted-companies-container">
      <div className="trusted-divider">
        <hr className="line" />
        <span className="trusted-text">Trusted by Job Holders from</span>
        <hr className="line" />
      </div>
      <div className="trusted-logos">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="company-logo"
          />
        ))}
      </div>
      <br/>
      <br/>
      <hr className="line" />
    </div>
  );
};

export default TrustedCompanies;