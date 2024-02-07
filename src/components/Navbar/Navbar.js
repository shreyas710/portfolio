import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

const Navbar = ({darkMode, setDarkMode}) => {

  const [displayNav, setDisplayNav] = useState("none");

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvuknw9qw'
    }
  });

  const hamburger = darkMode ? cld.image('docs/models-5') : cld.image('docs/models-9'); 
  const darkToggle = darkMode ? cld.image('docs/models-7') : cld.image('docs/models-8')
  
  const toggleNav = () => {
    if(displayNav === "none") {
      setDisplayNav("block");
    } else {
      setDisplayNav("none");
    }
  }

  return (
    <nav className={(darkMode ? "navbar1 " : "navbar1-light ") + "container-fluid"} >
      <HashLink smooth onClick={() => window.scrollTo(0,0)}><h1 style={{marginBottom: "0px"}}>SK</h1></HashLink>
      <div className='darkToggleBtn'>
        <AdvancedImage onClick={() => setDarkMode(!darkMode)} loading="lazy" cldImg={darkToggle} width={"30px"} height={"30px"} alt='dark toggle img'/>
      </div>
      <div className="mobile-container row" style={{color: darkMode ? "antiquewhite" : "#333", marginRight: "30px"}} onClick={() => toggleNav()}>
        <div className="col-1">
        <AdvancedImage loading="lazy" cldImg={hamburger} width={"30px"} height={"30px"} alt='hamburger img'/>
        </div>
      </div>
      
      <div className="mobile-nav" style={{display: displayNav, color: darkMode ? "antiquewhite" : "#333", marginTop: "200px", transition: "all 0.6s"}}>
        <div className='links'>
          <HashLink smooth onClick={() => {window.scrollTo(0,0); toggleNav()}}>Home</HashLink>
          <HashLink smooth onClick={() => toggleNav()} to='#experiences'>Experiences</HashLink>
          <HashLink smooth onClick={() => toggleNav()} to='#projects'>Projects</HashLink>
          <HashLink smooth onClick={() => toggleNav()} to='#contact'>Contact</HashLink>
        </div>
      </div>

      <div className='links'>
        <HashLink smooth onClick={() => window.scrollTo(0,0)}>Home</HashLink>
        <HashLink smooth to='#experiences'>Experiences</HashLink>
        <HashLink smooth to='#projects'>Projects</HashLink>
        <HashLink smooth to='#contact'>Contact</HashLink>
      </div>
    </nav>
  )
};
export default Navbar;