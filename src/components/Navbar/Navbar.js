import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

const Navbar = () => {

  const [displayNav, setDisplayNav] = useState("none");

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvuknw9qw'
    }
  });

  const hamburger = cld.image('docs/models-5'); 

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
        <AdvancedImage loading="lazy" cldImg={hamburger} width="60%" alt='hamburger img'/>
      </div>
      
      <div className="mobile-nav" style={{display: displayNav, color: "antiquewhite", marginTop: "200px", transition: "all 0.6s"}}>
        <div className='links'>
          <HashLink smooth onClick={() => {window.scrollTo(0,0); toggleNav()}}>Home</HashLink>
          <HashLink smooth onClick={() => toggleNav()} to='#experiences'>Experiences</HashLink>
          <HashLink smooth onClick={() => toggleNav()} to='#projects'>Projects</HashLink>
          <HashLink smooth onClick={() => toggleNav()} to='#contact'>Contact Me</HashLink>
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