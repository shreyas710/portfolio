import React from 'react';
import './Project.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

const Project = ({darkMode}) => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvuknw9qw'
    }
  });

  const githubLogo = darkMode ? cld.image('docs/models-6') : cld.image('docs/models-10');
  const openProject = darkMode ? cld.image('docs/models-32') : cld.image('docs/models-33');

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
    <div className='project' id='projects'>
        <Container>
          <div className="heading row">
            <h3>{title}</h3>
          </div>
          <Row>
            {
              projects.map(project => {
                return (
                  <Col key={project.id} lg={4}>
                    <div className="holder">
                      <Card className='card' style={{background: darkMode ? "#333" : "#e0cdb4", marginTop: "20px"}}>
                        <Card.Body>
                          <Card.Title style={{color: darkMode ? "antiquewhite" : "#222", fontSize: "2em", fontWeight: "500"}}>{project.title}</Card.Title>
                          <hr style={{color: darkMode ? "#faebd7" : "black", margin: "0"}}/>
                          <ul style={{listStyleType: "disc"}}>
                              {
                                project.desc.map(des => {
                                  return (
                                    <li style={{color: darkMode ? "antiquewhite" : "#222"}} key={des.id}>{des.text}</li>
                                  )
                                })
                              }
                            </ul>
                          <hr style={{color: darkMode ? "#faebd7" : "black", margin: "0"}}/>
                          <div className={darkMode ? "changeLight-light" : "changeLight-dark"}>{project.techStack}</div>
                          <div className={(darkMode ? "projectlinks" : "projectlinks-light") + " row"} >
                            {
                              project.projectLink && 
                              <div className="col-2">
                                <a href={project.projectLink} target='_blank' rel='noreferrer noopener'>       <AdvancedImage loading="lazy" cldImg={openProject} width={"30px"} height={"30px"} alt="open project"/>
                                </a>
                              </div>
                            }
                            {
                              project.sourceCodeLink && 
                              <div className="col-2">
                                <a href={project.sourceCodeLink} target='_blank' rel='noreferrer noopener'>        <AdvancedImage loading="lazy" cldImg={githubLogo} width={"30px"} height={"30px"} alt="github"/>
</a>
                              </div>
                            }
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                )
              })
            }
           
          </Row>
        </Container>
    </div>
  )
};

export default Project;
