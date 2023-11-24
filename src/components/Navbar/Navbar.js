import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => (
  <nav className="navbar1">
      <Link to='/'><h1>SK</h1></Link>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/experiences'>Experience</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact Me</Link>
      </div>
  </nav>
);
export default Navbar;
