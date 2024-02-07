import React from 'react';
import './Experience.css';

const Experience = ({darkMode}) => {

  let title = `<experiences>`

  const exps = [{
    id: 1,
    'company': "Bajaj Finserv",
    'role': 'Software Engineer',
    'startDate': 'July 2022',
    'endDate': 'June 2023',
    'desc': [
      {
        'text': "Spearheaded conceptualization, design, and implementation of the Increase Credit Line (ICL) model, revolutionizing how customers accessed Top-Up Loans on Existing Loans. ICL is now live for over 50,000 customers on the Bajaj Finserv App and is projected to generate a revenue of $1 million.", 
        id: 1
      }, 
      {
        "text": "Pioneered development of the Switch Loan Variant (SLV) process, allowing a vast customer base of 50 million to change loan variants effortlessly. SLV improved customer flexibility, satisfaction, and engagement by 70%.",
        id: 2
      },
      {
        "text": "Led implementation, and management of an end-to-end ELK Stack system to display and monitor APIs utilized by team. The system helped to improve overall API performance by 80%.",
        id: 3
      }
    ] 
  },{
    id: 2,
    'company': 'Persistent Systems',
    'role': 'SDE Intern',
    'startDate': 'June 2021',
    'endDate': 'July 2021',
    "desc": [
      {
        "text": "Collaborated with a 10-member development team to design and construct a specialized web application exclusively for the Indian Army, enabling seamless online procurement from Army Shops and Canteens.",
        id: 1
      },
      {
        "text": "Implemented a feature to display new product arrivals leading to a 20% boost in revenue from new products.",
        id: 2
      }
    ]
  }];

  return (
    <div className='exp container' id='experiences'>
      <div className="heading row">
        <h3>{title}</h3>
      </div>
        {exps.map((exp) => {
          return (
            <div style={{marginTop: "40px"}} key={exp.id} className={darkMode ? "expcontent" : "expcontent-light"}>
              <div className="companyStart row">
                <div className="roleName col-6">
                {exp.role}
                </div>
                <div className="startDate col-6">
                {exp.startDate} - {exp.endDate}
                </div> 
              </div>
              <div className="roleEnd row">
                <div className="companyName col-6">
                {exp.company}
                </div>
              </div>
              <br />
              <div className="descript row">
                <ul style={{listStyleType: 'disc'}}>
                  {exp.desc.map((de) => {
                    return (
                      <li key={de.id}>{de.text}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
    </div>
  )
};


export default Experience;
