import React, { useState } from 'react';
import './scrollButton.css'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

const ScrollButton = ({darkMode}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvuknw9qw'
    }
  });

  const scrollArrow = darkMode ? cld.image('docs/models-15') : cld.image('docs/models-14') 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 

  return (
    <div className='scrollUp' style={{display: visible ? 'block' : 'none'}}> 
        <AdvancedImage onClick={scrollToTop} loading="lazy" cldImg={scrollArrow} width={"30px"} height={"30px"} alt='scroll up img'/>
    </div>
  )
}

export default ScrollButton;
