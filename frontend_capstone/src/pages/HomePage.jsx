import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import HomeJobCard from '../components/HomeJobCard/HomeJobCard';
import HomeBanner from '../components/HomeBanner/HomeBanner'; // Import the new HomeBanner component
import TrustedCompanies from '../components/TrustedCompanies/TrustedCompanies';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeBanner /> 
      <TrustedCompanies/>
      <HomeJobCard />
      <Footer/>
    </>
  );
};

export default Home;