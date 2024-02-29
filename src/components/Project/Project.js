import React from 'react';
import './Project.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

const Project = ({ darkMode }) => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvuknw9qw'
    }
  });

  const githubLogo = darkMode ? cld.image('docs/models-6') : cld.image('docs/models-10');
  const openProject = darkMode ? cld.image('docs/models-32') : cld.image('docs/models-33');

  let title = `<projects . . . >`

  const projects = [
    {
      id: 1,
      title: 'Chat.io',
      techStack: 'ReactJS, NodeJS, Express, Socket.io, Chakra UI, MongoDB, Mongoose',
      desc: 'A chat application that enables real-time chat updation and real-time notifications using Socket.io. Implemented JWT Authentication for protecting user chats. Allowed faciity of creating group chats.',
      show: "hide",
      sourceCodeLink: "https://github.com/shreyas710/Chat.io",
    },
    {
      id: 2,
      title: 'Summarized Report for Chest X-Rays',
      techStack: 'Python, Tensorflow, Keras, Numpy, Pandas, Streamlit',
      desc: 'A Streamlit application focused on generating summarized medical report for uploaded Chest X-Rays',
      show: "hide",
    },
    {
      id: 3,
      title: 'Path Finding Visualizer',
      techStack: 'ReactJS, JavaScript, ReactStrap, React Context and Hooks',
      desc: 'Application to visualize path between start and end point using various Path finding algorithms like Dijkstra\'s, BFS, DFS, A*, and Bidirectional Swarm',
      show: "show",
      projectLink: "https://shreyas710.github.io/pathFindingVisualizer/",
      sourceCodeLink: "https://github.com/shreyas710/pathFindingVisualizer"
    }
  ]

  return (
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
                    <Card className='card' style={{ background: darkMode ? "#333" : "#e0cdb4", marginTop: "20px" }}>
                      <Card.Body>
                        <Card.Title style={{ color: darkMode ? "antiquewhite" : "#222", fontSize: "2em", fontWeight: "500" }}>{project.title}</Card.Title>
                        <hr style={{ color: darkMode ? "#faebd7" : "black", margin: "0" }} />
                        <hr style={{ color: darkMode ? "#faebd7" : "black", margin: "0" }} />
                        <Card.Text style={{ marginTop: "20px", color: darkMode ? "antiquewhite" : "#222", fontSize: "20px", fontWeight: "200" }}>
                          {project.desc}
                        </Card.Text>
                        <div className={darkMode ? "changeLight-light" : "changeLight-dark"}>{project.techStack}</div>
                        <div className={(darkMode ? "projectlinks" : "projectlinks-light") + " row"} >
                          {
                            project.projectLink &&
                            <div className="col-2">
                              <a href={project.projectLink} target='_blank' rel='noreferrer noopener'>       <AdvancedImage loading="lazy" cldImg={openProject} width={"30px"} height={"30px"} alt="open project" />
                              </a>
                            </div>
                          }
                          {
                            project.sourceCodeLink &&
                            <div className="col-2">
                              <a href={project.sourceCodeLink} target='_blank' rel='noreferrer noopener'>        <AdvancedImage loading="lazy" cldImg={githubLogo} width={"30px"} height={"30px"} alt="github" />
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
        <div className='row' style={{ justifyContent: "center", marginTop: "50px" }}>
          <Button href="https://github.com/shreyas710" variant="danger" target="_blank" className='btn col-md-4'>Show More Projects</Button>
        </div>
      </Container>
    </div>
  )
};

export default Project;
