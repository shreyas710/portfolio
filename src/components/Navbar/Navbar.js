import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => (
  <nav className="navbar">
      <h1>Shreyas Kulkarni</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/experiences'>Experience</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact Me</Link>
      </div>
  </nav>
);
export default Navbar;
