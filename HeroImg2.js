import React from "react";
import "./HeroImg2Styles.css";
import HeroBg from "../assets/hero2-bg.jpg"; // Import background image

const AboutExperience = () => {
    return (
      <div className="about-container" style={{ backgroundImage: `url(${HeroBg})` }}>
        {/* About Me Section */}
        <div className="about-me">
          <h1>ABOUT ME</h1>
          <p>
            Passionate about data-driven solutions, technology, and problem-solving. 
            Skilled in Python, SQL, and data visualization, with experience in business intelligence and performance monitoring.
          </p>
        </div>
  
        {/* Experience Section */}
        <div className="experience-container">
          <h2 className="experience-heading">Experience</h2>
  
          <div className="experience-item">
            <h3>Operations Team Intern | Touch ‘n Go</h3>
            <p>Jan 2024 – Apr 2024</p>
            <ul>
              <li>Assisted in the Petronas migration process, ensuring data accuracy and efficiency.</li>
              <li>Extracted and prepared data to support Business Intelligence.</li>
              <li>Monitored data at Reload Self-Service Kiosks, analyzing service delivery performance.</li>
            </ul>
          </div>
  
          <div className="experience-item">
            <h3>Research Assistant</h3>
            <p>Nov 2024 – Dec 2024</p>
            <ul>
              <li>Assisted in writing the textbook "Introduction to Data Mining."</li>
              <li>Researched topics like supervised, unsupervised, and reinforcement learning.</li>
              <li>Collaborated with academics to ensure content accuracy.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutExperience;