import React from 'react';
import './Home.css'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

  return (
    <div className='home container'>
      <div className="animation row">
        <TypeAnimation
          sequence={[
            'Hi, I am Shreyas Kulkarni.',
          ]}
          wrapper="div"
          speed={5}
          style={{ color:'#f1356d', fontSize: '5em', display: 'inline-block' }}
          repeat={0}
        />
      </div>
      

      <div className="extra row">
        <div className="aboutme col-md-12 ">
          <h5>I am a Computer Science Graduate Student at the University of Southern California.<br></br>
          I have a good grasp of Data Structures and Algorithms. I have good experience in the fields of <br />frontend and backend development.</h5>

          <br />
          <br />
          <br />

        </div>
        <div className="profileLinks row">
          <div className="github col-1">
            <a href="https://github.com/shreyas710" target='_blank' rel='noreferrer noopener'>
             <img src={require("../../assets/github-antiquewhite.png")} width={"40px"} height={"40px"} alt="" />
            </a>
          </div>
          <div className="linkedin col-1">
            <a href="https://www.linkedin.com/in/shreyasnk532" target='_blank' rel='noreferrer noopener'>
             <img src={require("../../assets/linkedin-antiquewhite.png")} width={"40px"} height={"40px"} alt="" />
            </a>
          </div>
          <div className="mail col-1">
            <a href="mailto:shreyasnk532@gmail.com" target='_blank' rel='noreferrer noopener'>
             <img src={require("../../assets/envelope-solid-antiquewhite.png")} width={"40px"} height={"40px"} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="resumeButton row">
        <a href= 'https://drive.google.com/file/d/1B0BZ53MvsyGE_11tdUMvua9BkX41XqOD/view?usp=sharing' target='_blank' rel='noreferrer noopener' type='button'>
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
