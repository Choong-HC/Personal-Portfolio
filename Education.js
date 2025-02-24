import React, { useState } from "react";
import "./EducationStyles.css";
import eduBg from "../assets/edu-bg.jpg"; // Background image
import uniLogo from "../assets/uni-logo.png"; // Replace with actual university logo
import collegeLogo from "../assets/college-logo.png"; // Replace with actual college logo

const Education = () => {
  // State to track flipped cards
  const [flipped, setFlipped] = useState({ uni: false, college: false });

  // Function to toggle flip state
  const toggleFlip = (card) => {
    setFlipped((prev) => ({ ...prev, [card]: !prev[card] }));
  };

  return (
    <section className="education-container" style={{ backgroundImage: `url(${eduBg})` }}>
      <h2 className="education-heading">Education</h2>

      {/* University Card */}
      <div 
        className={`education-card ${flipped.uni ? "flipped" : ""}`}
        onClick={() => toggleFlip("uni")}
      >
        <div className="education-card-inner">
          {/* Front Side */}
          <div className="education-card-front">
            <div className="edu-content">
              <img src={uniLogo} alt="Sunway University Logo" className="edu-logo" />
              <div className="edu-text">
                <h3 className="edu-title">Sunway University</h3>
                <p className="edu-degree">Bachelor of Information Systems (Honours) in Data Analytics</p>
                <p className="edu-duration">August 2021 - August 2024</p>
                <p className="edu-cgpa">CGPA: <span>3.76</span> (First Class Honours)</p>
              </div>
            </div>
          </div>
          {/* Back Side */}
          <div className="education-card-back">
            <h3 className="edu-title">Key Subjects</h3>
            <div className="edu-subjects-container">
              <ul className="edu-subjects">
                <li>Database Management Systems</li>
                <li>Information System Analysis & Design</li>
                <li>Information System Management and Strategy</li>
                <li>Data Mining</li>
                <li>Social Media Analytics</li>
              </ul>
              <ul className="edu-subjects">
                <li>Applied Statistics</li>
                <li>Big Data Analytics</li>
                <li>E-commerce</li>
                <li>Project Management</li>
                <li>Marketing & Entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* College Card */}
      <div 
        className={`education-card ${flipped.college ? "flipped" : ""}`}
        onClick={() => toggleFlip("college")}
      >
        <div className="education-card-inner">
          {/* Front Side */}
          <div className="education-card-front">
            <div className="edu-content">
              <img src={collegeLogo} alt="Sunway College Logo" className="edu-logo" />
              <div className="edu-text">
                <h3 className="edu-title">Sunway College</h3>
                <p className="edu-degree">Foundation in Arts</p>
                <p className="edu-duration">July 2020 - July 2021</p>
                <p className="edu-cgpa">CGPA: <span>3.95</span></p>
              </div>
            </div>
          </div>
          {/* Back Side */}
          <div className="education-card-back">
            <h3 className="edu-title">Key Subjects</h3>
            <div className="edu-subjects-container">
              <ul className="edu-subjects">
                <li>Introduction to Programming (Java)</li>
                <li>Introduction to Computer Science</li>
                <li>Microeconomics</li>
                <li>Macroeconomics</li>
                <li>Mathematical Techniques and Analysis</li>
              </ul>
              <ul className="edu-subjects">
                <li>Business Mathematics</li>
                <li>Statistical Techniques</li>
                <li>Critical Thinking Skills</li>
                <li>Introduction to Psychology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Education;
