import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'

const Navbar = () => {

  const [displayNav, setDisplayNav] = useState("none");

  const toggleNav = () => {
    if(displayNav === "none") {
      setDisplayNav("block");
    } else {
      setDisplayNav("none");
    }
  }

  return (
    <nav className="navbar1 container-fluid">
      <HashLink smooth onClick={() => window.scrollTo(0,0)}><h1>SK</h1></HashLink>
     
      <div className="mobile-container" style={{color: "antiquewhite"}} onClick={() => toggleNav()}>
        <img src={require("../../assets/hamburger-menu.png")} width="60%" alt='hamburger img'/>
      </div>
      
      <div className="mobile-nav" style={{display: displayNav, color: "antiquewhite", marginTop: "200px"}}>
        <div className='links'>
          <HashLink smooth onClick={() => window.scrollTo(0,0)}>Home</HashLink>
          <HashLink smooth to='#experiences'>Experiences</HashLink>
          <HashLink smooth to='#projects'>Projects</HashLink>
          <HashLink smooth to='#contact'>Contact Me</HashLink>
        </div>
      </div>

      <div className='links'>
        <HashLink smooth onClick={() => window.scrollTo(0,0)}>Home</HashLink>
        <HashLink smooth to='#experiences'>Experiences</HashLink>
        <HashLink smooth to='#projects'>Projects</HashLink>
        <HashLink smooth to='#contact'>Contact Me</HashLink>
      </div>
    </nav>
  )
};
export default Navbar;