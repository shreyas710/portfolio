import React from 'react';
import './Skills.css'

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

const Skills = ({ darkMode }) => {
  let title = `<skills . . . >`

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvuknw9qw'
    }
  });

  const skills = [
    {
      id: 1,
      title: "Programming Languages",
      img: "docs/models-20",
      languages: [
        {
          id: 1,
          title: "C",
        },
        {
          id: 2,
          title: "C++",
        },
        {
          id: 3,
          title: "JavaScript",
        },
        {
          id: 4,
          title: "TypeScript",
        },
        {
          id: 5,
          title: "Golang",
        },
        {
          id: 6,
          title: "Python",
        }
      ]
    },
    {
      id: 2,
      title: "Frontend",
      img: "docs/models-23",
      languages: [
        {
          id: 1,
          title: "Next.js",
        },
        {
          id: 2,
          title: "React.js",
        },
        {
          id: 3,
          title: "Angular",
        },
        {
          id: 4,
          title: "SCSS",
        },
        {
          id: 5,
          title: "Tailwind CSS"
        },
        {
          id: 6,
          title: "Chakra UI"
        },
        {
          id: 7,
          title: "Material UI"
        }
      ]
    },
    {
      id: 3,
      title: "Backend",
      img: "docs/models-24",
      languages: [
        {
          id: 1,
          title: "Node.js",
        },
        {
          id: 2,
          title: "Express"
        },
        {
          id: 3,
          title: "Socket.io"
        },
        {
          id: 4,
          title: "JWT"
        }
      ]
    },
    {
      id: 4,
      title: "Databases",
      img: "docs/models-25",
      languages: [
        {
          id: 1,
          title: "MySQL",
        },
        {
          id: 2,
          title: "MongoDB",
        },
        {
          id: 3,
          title: "PostgreSQL",
        },
        {
          id: 4,
          title: "Elastic Search",
        }
      ]
    },
    {
      id: 5,
      title: "Machine Learning",
      img: "docs/models-30",
      languages: [
        {
          id: 1,
          title: "NumPy"
        },
        {
          id: 2,
          title: "Keras"
        },
        {
          id: 3,
          title: "TensorFlow",
        },
        {
          id: 4,
          title: "Scikit Learn"
        },
        {
          id: 5,
          title: "MATLAB"
        }
      ]
    },
    {
      id: 6,
      title: "Game Development",
      img: "docs/models-35",
      languages: [
        {
          id: 1,
          title: "Win32 API",
        },
        {
          id: 2,
          title: "DirectX"
        },
        {
          id: 3,
          title: "OpenGL",
        },
      ]
    },
    {
      id: 7,
      title: "DevOps",
      img: "docs/models-28",
      languages: [
        {
          id: 1,
          title: "Kubernetes",
        },
        {
          id: 2,
          title: "Docker",
        },
        {
          id: 3,
          title: "Minikube",
        }
      ]
    }
  ]



  return (
    <div className='skills container' id="skills" style={{ color: darkMode ? "antiquewhite" : "#222" }}>
      <div className="heading row">
        <h3>{title}</h3>
      </div>

      <div className={(darkMode ? 'skillsBox' : 'skillsBoxLight') + ' row'} style={{ color: darkMode ? "antiquewhite" : "#222" }}>
        <div className='col-xl-12'>
          {skills.map(skill => {
            return (
              <div style={{ marginTop: "20px", marginLeft: "20px", marginBottom: skill.id === 5 ? "20px" : "0px" }} key={skill.id}>
                <div style={{ color: darkMode ? "#faebd7" : "#222", fontSize: "30px", fontWeight: "500" }}>
                  <AdvancedImage loading="lazy" cldImg={cld.image(skill.img)} width={"30px"} height={"30px"} style={{ marginRight: "20px" }} alt={skill.title} />
                  {skill.title}
                </div>
                <div className='skillsList'>
                  <ul>
                    {skill.languages.map(lang => {
                      return (
                        <li style={{ color: darkMode ? "antiquewhite" : "#222", fontSize: "18px", fontWeight: "300" }} key={lang.id}>
                          {lang.title}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

            )
          })}
        </div>
      </div>

    </div>
  )
};


export default Skills;
