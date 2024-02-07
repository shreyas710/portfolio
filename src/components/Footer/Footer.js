import React from 'react';
import './Footer.css'

const Footer = ({darkMode}) => (
  <div className="footer" style={{textAlign: "center", backgroundColor: darkMode ? "#222" : "#faebd7", color: darkMode ? "antiquewhite" : "#222"}}>
    Made with ❤️ using <span style={{color: "rgb(20 158 202)"}}>ReactJS</span>
    <br />
    by Shreyas Kulkarni
  </div>
);

export default Footer;
