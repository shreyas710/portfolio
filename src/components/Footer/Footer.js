import React from 'react';
import './Footer.css'

const Footer = ({darkMode}) => (
  <div className={(darkMode ? "footer" : "footer-light") + " row"}>
    <div className='col'></div>
    <div className='col-md-6'>
    Made with ❤️ using <span>ReactJS</span>
    <br />
    by Shreyas Kulkarni
    </div>
    <div className="col"></div>
  </div>
);

export default Footer;
