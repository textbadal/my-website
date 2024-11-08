// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the state of the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>My E-Learning Platform</h1>
      
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <nav className={menuOpen ? 'mobile open' : 'mobile'}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/courses">Our Courses</Link>
        <Link to="/verify-certificate">Certificate Verification</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
