import React from 'react';
import bannerImage from '../../assets/homePageBanner.png'; // Adjust the path if needed
import './HomeBanner.css';

const HomeBanner = () => {
  return (
    <div className="home-banner-container">
      <img
        src={bannerImage}
        alt="Home Page Banner"
        className="home-banner"
      />
    </div>
  );
};

export default HomeBanner;