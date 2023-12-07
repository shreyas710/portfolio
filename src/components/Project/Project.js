import React from 'react';
import './Project.css'

const Project = () => {

  let title = `<projects>`

  const projects = [
    {
      id: 1,
      title: 'Path Finding Visualizer',
      techStack: 'ReactJS, JavaScript, ReactStrap, React Context and Hooks',
      desc: [
        {
          text: "Led design and development of a comprehensive end-to-end React application focused on visualizing path-finding algorithms, demonstrating a strong commitment to enhancing user understanding of complex algorithms.", 
          id: 1
        },
        {
          text: "Executed a diverse range of algorithms including Dijkstra\'s, A*, BFS, DFS, and Bidirectional Swarm",
          id: 2 
        }
      ],
      projectImg: '../../assets/pathfinding.png'
    }, 
    {
      id: 2,
      title: 'Summarized Report for Chest X-Rays',
      techStack: 'Python, Tensorflow, Keras, Numpy, Pandas, Streamlit',
      desc: [
        {
          text: 'Collaborated with a 4-member development team to architect an application dedicated to automated generation of succinct medical reports for chest X-rays.',
          id: 1
        },
        {
          text: 'Employed cutting-edge technologies, including Attention Mechanism, and Context Flow, to attain a BLEU score of 76%.',
          id: 2
        }
      ],
      projectImg: '../../assets/pathfinding.png'
    },
    {
      id: 3,
      title: 'Placement Portal',
      techStack: 'Python, Django, MySQL, HTML, SCSS',
      desc: [
        {
          text: 'Developed an intuitive application to create a student-focused system facilitating job search and application processes.',
          id: 1
        },
        {
          text: 'Demonstrated expertise in database design and management by determining and revamping intricate relationships between various SQL tables, optimizing data retrieval and storage processes.',
          id: 2
        }
      ],
      projectImg: '../../assets/pathfinding.png'
    }
  ]

  return(
    <div className='project container' id='projects'>
      <div className="heading row">
        <h3>{title}</h3>
      </div>
      <div className="projectContent row">
        {projects.map(project => {
          return (
            <div key={project.id} className="project1 row">
              <div className="projectHead col-3">
                {project.title}
              </div>
              <div className="projectDesc col-3">
                <div className="description">
                  <ul style={{listStyleType: 'square'}}>
                    {project.desc.map((de) => {
                      return (
                        <li key={de.id}>{de.text}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="projectImg col-6">
                <img src={require('../../assets/pathfinding.png')} alt={project.title} height='100%' width='100%'/>
              </div>
            </div>
          )
        })}
        
      </div>
    </div>
  )
};

export default Project;
