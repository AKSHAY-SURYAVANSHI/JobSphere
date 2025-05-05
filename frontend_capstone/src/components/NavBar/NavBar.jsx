import React, { useContext } from "react";
import "./Navbar.css"; 
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // Adjust path

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current route is jobcardlist
  const isSpecialPage = 
    location.pathname === "/jobcardlist" || 
    location.pathname === "/apply" || 
    location.pathname === "/register" || 
    location.pathname === "/login";

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={`navbar ${isSpecialPage ? 'navbar-jobcardlist' : ''}`}>
      <div className="left-container">
        <Link to="/" className="logo no-underline">JobSPHERE</Link> {/* No underline */}
      </div>
      <div className="right-container">
        <Link to="/#" className="nav-button">Home</Link> {/* Redirect to # */}
        <Link to="/jobcardlist" className="nav-button">Jobs</Link> {/* Redirect to /jobcardlist */}
        
        <span className="separator">|</span>

        {user ? (
          <>
            <span className="welcome-message">Welcome, {user.firstname}</span>
            <button className="nav-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;