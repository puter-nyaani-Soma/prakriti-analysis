import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="brand">
          <img src={logo} alt="Logo" className="logo" />
         
        </div>
        <ul className="nav-list">
          <li className="nav-item"><Link to ="/">Home</Link></li>
          <li className="nav-item"><Link to="/find-your-body">Find Your Body Type</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
