import React from 'react';
import './Project.css'

const Project = () => {

  let title = `<projects>`

  return(
    <div className='project container' id='projects'>
      <div className="heading row">
        <h3>{title}</h3>
      </div>
      {/* <div className="projectContent row">
        <div className="project1 row">
            <div className="projectHead col-3">

            </div>
            <div className="projectDesc col-3">
              <div className="description">
                
              </div>
            </div>
          <div className="projectImg col-6">
            <img src={require('../../assets/pathfinding.png')} alt="pathfinding" height='100%' width='100%'/>
          </div>
        </div>
      </div> */}
    </div>
  )
};

export default Project;
