import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="brand">
          <img src={logo} alt="Logo" className="logo" />
         
        </div>
        <ul className="nav-list">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">Find Your Body Type</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
