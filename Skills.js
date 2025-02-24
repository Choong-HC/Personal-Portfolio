import React from "react";
import "./SkillsStyles.css"; // Importing CSS

// Importing images
import pythonLogo from "../assets/python-logo.png";
import rLogo from "../assets/R-logo.png";
import sqlLogo from "../assets/sql-logo.png";
import sasLogo from "../assets/sas-logo.png";
import awsLogo from "../assets/aws-logo.png";
import mlLogo from "../assets/ML-logo.png";
import dvLogo from "../assets/DV-logo.png";
import bgImage from "../assets/hero2-bg.jpg"; // Background

const skills = [
  { name: "Python", logo: pythonLogo },
  { name: "R Studio", logo: rLogo },
  { name: "SQL", logo: sqlLogo },
  { name: "SAS Enterprise Miner", logo: sasLogo },
  { name: "SAS Enterprise Guide", logo: sasLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Machine Learning", logo: mlLogo },
  { name: "Data Visualization", logo: dvLogo },
];

const Skills = () => {
  return (
    <div className="skills-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.logo} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
