import React from 'react';
import './Home.css'
import { TypeAnimation } from 'react-type-animation';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

const Home = ({ darkMode, profileImg }) => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvuknw9qw'
    }
  });

  const githubLogo = darkMode ? cld.image('docs/models-6') : cld.image('docs/models-10');
  const linkedinLogo = darkMode ? cld.image('docs/models-3') : cld.image('docs/models-11');
  const instaLogo = darkMode ? cld.image('docs/models-2') : cld.image('docs/models-12');

  return (
    <div className='home container'>
      <div className="animation row">
        <p style={{ fontSize: "5em" }}>Shreyas Kulkarni.</p>
      </div>

      <div className={(darkMode ? "extra" : "extra-light") + " row"}>
        <div className="aboutme col-md-6">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              1500,
              'Full Stack Developer',
              1500,
              'Dev Ops Engineer',
              1500,
              'Data Scientist',
              1500,
              'Machine Learning Engineer',
              1500,
            ]}
            wrapper="div"
            speed={60}
            deletionSpeed={70}
            style={{ color: '#f1356d', fontSize: '2em', display: 'inline-block' }}
            repeat={0}
          />
          <br />
          <br />
          <br />
          <h5>I am a Computer Science Graduate Student at the University of Southern California.</h5>
          <div style={{ marginTop: "50px", marginBottom: "20px" }}>
            <h5>I have a good grasp of Data Structures and Algorithms. I have good experience in the fields of frontend and backend development.</h5>
          </div>
        </div>
        <div className="profilepic col-md-6">
          <AdvancedImage loading="lazy" cldImg={profileImg} />
        </div>
      </div>
      <div className="profileLinks row">
        <div className="github col-1">
          <a href="https://github.com/shreyas710" target='_blank' rel='noreferrer noopener'>
            <AdvancedImage loading="lazy" cldImg={githubLogo} width={"30px"} height={"30px"} alt="github" />
          </a>
        </div>
        <div className="linkedin col-1">
          <a href="https://www.linkedin.com/in/shreyasnk532" target='_blank' rel='noreferrer noopener'>
            <AdvancedImage loading="lazy" cldImg={linkedinLogo} width={"30px"} height={"30px"} alt="linkedin" />
          </a>
        </div>
        <div className="mail col-1">
          <a href="https://www.instagram.com/shr3yas.ku1karni" target='_blank' rel='noreferrer noopener'>
            <AdvancedImage loading="lazy" cldImg={instaLogo} width={"30px"} height={"30px"} alt="instagram" />
          </a>
        </div>
      </div>

      <div className={(darkMode ? "resumeButton" : "resumeButton-light") + " row"}>
        <a href='https://drive.google.com/file/d/1cLA8IxpnmrcAmBoQJysuZpmiOSWrf4Xo/view?usp=sharing' target='_blank' rel='noreferrer noopener' type='button'>
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
