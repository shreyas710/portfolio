import React from 'react';
import './Home.css'
import { TypeAnimation } from 'react-type-animation';



const Home = () => {

  return (
    <div className='home'>
      <TypeAnimation
        sequence={[
          'Hi, I am Shreyas Kulkarni',
          1000
        ]}
        wrapper="div"
        speed={30}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={0}
      />

      <div className="extra">
        <h5>A software engineer currently pursuing my master's in computer science at the University of Southern California.
</h5>
        <h7>
          My passion lies in using technology to solve complex real-life problems. I am also interested in problem-solving and I am very active on competitive programming sites such as Leetcode and Codeforces.
        </h7>
      </div>
    </div>
  );
};

export default Home;
