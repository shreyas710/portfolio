import React from 'react';
import './Skills.css'

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

const Skills = ({darkMode}) => {
  let title = `<skills>`

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
          title: "React",
        },
        {
          id: 2,
          title: "Angular",
        },
        {
          id: 3,
          title: "SCSS",
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
    // {
    //   id: 6,
    //   title: "Machine Learning",
    //   img: "docs/models-30",
    //   languages: [
    //     {
    //       id: 1,
    //       title: "NumPy"
    //     },
    //     {
    //       id: 2,
    //       title: "Keras"
    //     },
    //     {
    //       id: 3,
    //       title: "TensorFlow",
    //     },
    //     {
    //       id: 4,
    //       title: "Scikit Learn"
    //     },
    //     {
    //       id: 5,
    //       title: "MATLAB"
    //     }
    //   ]
    // }
  ]

  

  return ( 
    <div className='skills container' id="skills" style={{color: darkMode ? "antiquewhite" : "#222"}}>
      <div className="heading row">
        <h3>{title}</h3>
      </div>

      <div className='skillsBox row' style={{color: darkMode ? "antiquewhite" : "#222"}}>
        <div className='col-xl-6'>
        {skills.map(skill => {
          return (
            <div style={{marginTop: "20px", marginLeft: "20px", marginBottom: skill.id === 5 ? "20px" : "0px"}} key={skill.id}>
              <div style={{color: darkMode ? "#faebd7" : "#222", fontSize: "35px", fontWeight: "500"}}>
                <AdvancedImage loading="lazy" cldImg={cld.image(skill.img)} width={"30px"} height={"30px"} style={{marginRight: "20px"}} alt={skill.title}/>
                {skill.title}
              </div>
              <div className='skillsList'>
                <ul>
                  {skill.languages.map(lang => {
                    return (
                      <li style={{color: darkMode ? "antiquewhite" : "#222", fontSize: "20px", fontWeight: "300"}} key={lang.id}>
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
        <div className="codeImg col-6">
        <AdvancedImage loading="lazy" cldImg={cld.image("docs/models-29")} width={"400px"} height={"400px"} style={{marginLeft: "290px", marginTop: "-90px"}} alt="coding"/>
      </div>
      </div>
      
    </div>
  )
};


export default Skills;
