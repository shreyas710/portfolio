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
          text: "Executed a diverse range of algorithms including Dijkstra's, A*, BFS, DFS, and Bidirectional Swarm",
          id: 2 
        }
      ],
      show: "show",
      projectLink: "https://shreyas710.github.io/pathFindingVisualizer/",
      sourceCodeLink: "https://github.com/shreyas710/pathFindingVisualizer"
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
      show: "hide",
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
      show: "hide",
      sourceCodeLink: "https://github.com/sanketwadekar/placement_portal",
    }
  ]

  return(
    <div className='project container' id='projects'>
      <div className="heading row">
        <h3>{title}</h3>
      </div>
      <div className="accordion" id="accordionExample">
        {projects.map(project => {
          return (
            <div key={project.id} className="accordion-item">
              <h2 className="accordion-header" id={'heading' + project.id}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse' + project.id} aria-expanded="true" aria-controls={'collapse' + project.id}>
                  {project.title}
                </button>
              </h2>
              <div id={'collapse' + project.id} className={"accordion-collapse collapse " + project.show} aria-labelledby={'heading' + project.id} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <div className="description">
                    <ul style={{listStyleType: 'square'}}>
                      {project.desc.map((de) => {
                        return (
                          <li key={de.id}>{de.text}</li>
                        )
                      })}
                    </ul>

                    <div className="techStack">
                      <span>Tech Stack: <br /></span>{project.techStack}
                    </div>
                  </div>
                  <div className="links row">
                    {
                      project.projectLink && 
                      <div className="col-2">
                        <a href={project.projectLink} target='_blank' rel='noreferrer noopener'>Project Link</a>
                      </div>
                    }
                    {
                      project.sourceCodeLink && 
                      <div className="col-2">
                        <a href={project.sourceCodeLink} target='_blank' rel='noreferrer noopener'>Source Code Link</a>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Project;
