import React from 'react';
import './Project.css'

const Project = () => {

  let title = `. . .<projects>. . . . .`

  return(
    <div className='project container' id='projects'>
      <div className="heading row">
        <h3>{title}</h3>
      </div>
      <div className="content row">
      </div>
    </div>
  )
};

export default Project;
