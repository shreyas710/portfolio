import React from 'react';
import './Home.css'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

  return (
    <div className='home container'>
      <div className="animation row">
        <p style={{fontSize: "5em"}}>Shreyas Kulkarni.</p>
      </div>
      

      <div className="extra row">
        <div className="aboutme col-md-6">
          <TypeAnimation
            sequence={[
                'Software Engineer',
                1500,
                'Full Stack Developer',
                1500,
                'Dev Ops Engineer',
                1500
              ]}
            wrapper="div"
            speed={10}
            deletionSpeed={60}
            style={{ color:'#f1356d', fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          /> 
          <br />
          <br />
          <br />
          <h5>I am a Computer Science Graduate Student at the University of Southern California.<br></br>
          I have a good grasp of Data Structures and Algorithms. I have good experience in the fields of frontend and backend development.</h5>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className="profilepic col-md-6">
          <img src={require("../../assets/profile.png")} alt="i_look_like_this" height={"400px"}/>
        </div>
      </div>
      <div className="profileLinks row">
          <div className="github col-1">
            <a href="https://github.com/shreyas710" target='_blank' rel='noreferrer noopener'>
             <img src={require("../../assets/github.png")} width={"30px"} height={"30px"} alt="github" />
            </a>
          </div>
          <div className="linkedin col-1">
            <a href="https://www.linkedin.com/in/shreyasnk532" target='_blank' rel='noreferrer noopener'>
             <img src={require("../../assets/linkedin.png")} width={"30px"} height={"30px"} alt="linkedin" />
            </a>
          </div>
          <div className="mail col-1">
            <a href="https://www.instagram.com/shr3yas.ku1karni" target='_blank' rel='noreferrer noopener'>
             <img src={require("../../assets/instagram.png")} width={"30px"} height={"30px"} alt="" />
            </a>
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
