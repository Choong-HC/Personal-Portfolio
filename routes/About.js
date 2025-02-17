import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Skills from "../components/Skills";
import MyProject from "../components/MyProject";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div id="heroImg2">
      <HeroImg2/>
      </div>
      <Education/>
      <Skills />
      <div id="myProject">
      <MyProject />
      </div>
      <Footer />
    </div>
  );
};

export default About;
