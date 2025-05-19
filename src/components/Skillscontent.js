import React from 'react';
import './Skillscontent.css';
 // Adjust the path based on your folder structure
import bgport7 from '../assets/bgport7.jpg';

const skillsData = [
  { icon: 'fa-html5', name: 'HTML' },
  { icon: 'fa-css3-alt', name: 'CSS' },
  { icon: 'fa-bootstrap', name: 'Bootstrap' },
  { icon: 'fa-js', name: 'JavaScript' },
  { icon: 'fa-react', name: 'React JS' },
  { icon: 'fa-python', name: 'Python' },
  { icon: 'fa-database', name: 'SQL' },
  { icon: 'fa-code', name: 'Django' },
];

const Skills = () => {
  return (
    <div
      className="skills-section"
      style={{
        backgroundImage:`url(${bgport7.jpg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <i className={`fa-brands ${skill.icon} skill-icon`}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
