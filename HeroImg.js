import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/bg1.gif";

import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
        <h1>Welcome to My Portfolio.</h1>
        <p>A data analytics fresh graduate passionate about utilizing analytics, statistics, and programming to transform complex data into actionable strategic decisions and uncover insightful trends that drive business success. Dedicated to leveraging machine learning techniques to enhance data interpretation and contribute effectively in this rapidly evolving field.</p>
        <div>
          <Link to="/about"
          className="btn">Learn More About Me</Link>
        </div>
    </div>
</div>

  )
}


export default HeroImg