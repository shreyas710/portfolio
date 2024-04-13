import React from 'react';
import './Experience.css';

const Experience = ({ darkMode }) => {

  let title = `<experiences . . . >`

  const exps = [{
    id: 1,
    'company': "Bajaj Finserv",
    'role': 'Software Engineer',
    'startDate': 'July 2022',
    'endDate': 'June 2023',
    'desc': [
      {
        'text': "Pioneered development of the Switch Loan Variant process, allowing a customer base of 50 million to change loan variants, revamping customer flexibility, satisfaction, and engagement by 70%.",
        id: 1
      },
      {
        "text": "Took end-to-end responsibility for implementing the Increase Credit Line model, allowing customers to access Top-Up loans on existing loans.ICL is now live for over 50,000 customers and is projected to generate a revenue of $1.2 million.",
        id: 2
      },
      {
        "text": "Designed and deployed an end-to-end ELK Stack API Monitoring system using PVCs and Kubernetes. The system improved overall API performance by 60%.",
        id: 3
      }, 
      {
        "text": "Worked on Google Analytics and ClickStream part for EMI, HEMI, and SALPL Modules.",
        id: 4
      }
    ]
  }, {
    id: 2,
    'company': 'Persistent Systems',
    'role': 'SDE Intern',
    'startDate': 'June 2021',
    'endDate': 'July 2021',
    "desc": [
      {
        "text": "Engineered an Angular/TypeScript-based web application exclusively for the Indian Army, enabling seamless online procurement from Army Shops and Canteens.",
        id: 1
      },
      {
        "text": "Added functionality to display new product arrivals resulting in a 20% increase in customer engagement.",
        id: 2
      },
      {
        "text": "Developed feature to select different stores and place orders from different stores using MapMyIndia API.",
        id: 3
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
          <div style={{ marginTop: exp.id === 1 ? "10px" : "80px" }} key={exp.id} className={darkMode ? "expcontent" : "expcontent-light"}>
            <div className="companyStart row">
              <div className="roleName col-6">
                {exp.company}
              </div>
              <div className="startDate col-6">
                {exp.startDate} - {exp.endDate}
              </div>
            </div>
            <div className="roleEnd row">
              <div className="companyName col-6">
                {exp.role}
              </div>
            </div>
            <br />
            <div className="descript row">
              <ul style={{ listStyleType: 'disc' }}>
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
