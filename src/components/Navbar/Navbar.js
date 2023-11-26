import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'

const Navbar = () => (
  <nav className="navbar1">
      <HashLink smooth onClick={() => window.scrollTo(0,0)}><h1>SK</h1></HashLink>
      <div className='links'>
        <HashLink smooth onClick={() => window.scrollTo(0,0)}>Home</HashLink>
        <HashLink smooth to='#experiences'>Experiences</HashLink>
        <HashLink smooth to='#projects'>Projects</HashLink>
        <HashLink smooth to='#contact'>Contact Me</HashLink>
      </div>
  </nav>
);
export default Navbar;
