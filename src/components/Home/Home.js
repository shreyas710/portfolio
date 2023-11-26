import React from 'react';
import './Home.css'
import { TypeAnimation } from 'react-type-animation';
import { SocialIcon } from 'react-social-icons';


const Home = () => {

  return (
    <div className='home container'>
      <div className="animation row">
        <TypeAnimation
          sequence={[
            'Hi, I am Shreyas Kulkarni.',
            1000,
          ]}
          wrapper="div"
          speed={30}
          style={{ color:'#f1356d', fontSize: '4em', display: 'inline-block', fontWeight: 'bolder' }}
          repeat={0}
        />
      </div>
      

      <div className="extra row">
        <div className="aboutme col-6">
          <h5>I'm a graduate student at University of Southern California, CA. <br></br>
          I have a keen interest in Data Structures and Algorithms. I also enjoy building mobile applications!</h5>

          <br />
          <br />
          <br />

          <h5>Currently looking for opportunities to utilize my skills in collaborative and distributed environment.</h5>
        </div>
        <div className="profilepic col-3">
          <img src={require('../../assets/profile.jpg')} alt="profile" height='200px' width='150px'/>
        </div>
        <div className="profileLinks col-3">
          <div className="github row">
            <a href="https://github.com/shreyas710" target='_blank' rel='noreferrer noopener'><SocialIcon network="github" style={{ width: '25px', height: '25px' }}/>
            <p>GitHub</p></a>
          </div>
          <div className="linkedin row">
            <a href="https://www.linkedin.com/in/shreyasnk532" target='_blank' rel='noreferrer noopener'><SocialIcon network="linkedin" style={{ width: '25px', height: '25px' }}/>
            <p>LinkedIn</p></a>
          </div>
        </div>
      </div>

      <div className="resumeButton row">
        <button>View Resume</button>
      </div>
    </div>
  );
};

export default Home;
