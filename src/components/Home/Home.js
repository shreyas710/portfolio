import React from 'react';
import './Home.css'
import { TypeAnimation } from 'react-type-animation';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

const Home = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvuknw9qw'
    }
  });

  const profileImg = cld.image('docs/models-4'); 
  const githubLogo = cld.image('docs/models');
  const linkedinLogo = cld.image('docs/models-3');
  const instaLogo = cld.image('docs/models-2');

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
          <AdvancedImage cldImg={profileImg} height={"350px"}/>
        </div>
      </div>
      <div className="profileLinks row">
          <div className="github col-1">
            <a href="https://github.com/shreyas710" target='_blank' rel='noreferrer noopener'>
              <AdvancedImage cldImg={githubLogo} width={"30px"} height={"30px"} alt="github"/>
            </a>
          </div>
          <div className="linkedin col-1">
            <a href="https://www.linkedin.com/in/shreyasnk532" target='_blank' rel='noreferrer noopener'>
              <AdvancedImage cldImg={linkedinLogo} width={"30px"} height={"30px"} alt="linkedin"/>
            </a>
          </div>
          <div className="mail col-1">
            <a href="https://www.instagram.com/shr3yas.ku1karni" target='_blank' rel='noreferrer noopener'>
              <AdvancedImage cldImg={instaLogo} width={"30px"} height={"30px"} alt="instagram"/>
            </a>
          </div>
        </div>

      <div className="resumeButton row">
        <a href= 'https://drive.google.com/file/d/15jMKmasPE0aAIiwbdyZOYV1bLFLDG-vk/view?usp=sharing' target='_blank' rel='noreferrer noopener' type='button'>
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
