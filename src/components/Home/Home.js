import React from 'react';
import './Home.css'
import { TypeAnimation } from 'react-type-animation';
import CIcon from '@coreui/icons-react';
import { cibGithub, cibLinkedinIn } from '@coreui/icons';

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
        <div className="aboutme col-md-9">
          <h5>I am a Computer Science Graduate Student at the University of Southern California.<br></br>
          I have a good grasp of Data Structures and Algorithms. I have good experience in the fields of <br />frontend and backend development.</h5>

          <br />
          <br />
          <br />

          <h5>Currently looking for opportunities to utilize my skills in collaborative and distributed environment.</h5>
        </div>
        {/* <div className="profilepic col-md-3">
          <img src={require('../../assets/profile.jpg')} alt="profile" height='220px' width='140px'/>
        </div> */}
        <div className="profileLinks col-md-3">
          <div className="github row">
            <a href="https://github.com/shreyas710" target='_blank' rel='noreferrer noopener'>
            <CIcon style={{height: '25px', width: '25px'}} icon={cibGithub}/>
            <p>GitHub</p></a>
          </div>
          <div className="linkedin row">
            <a href="https://www.linkedin.com/in/shreyasnk532" target='_blank' rel='noreferrer noopener'>
            <CIcon style={{height: '25px', width: '25px'}}  icon={cibLinkedinIn}/>
            <p>LinkedIn</p></a>
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
