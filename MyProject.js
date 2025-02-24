import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MyProjectStyles.css"; // Importing custom styles

import projectImage from "../assets/FakeNews-bg.png"; // Project background image
import comingSoonImage from "../assets/coming-soon.gif"; // Coming Soon GIF

const projects = [
  {
    title: "Final Year Project – Fake News Detection Using Ensemble Modelling with Features Selection",
    image: projectImage,
    github: "https://github.com/Choong-HC/Fake-News-Detection-Using-Ensemble-Modelling-with-Features-Selection",
    ieee: "https://doi.org/10.1109/ICSPC63060.2024.10862468",
    description: (
      <>
        Developed a news classification prototype for Fake News Detection using feature engineering and hyperparameter 
        optimization. Assessed ensemble modeling effectiveness and compiled a dataset integrating multiple features 
        for research. The project was published in an{" "}
        <a
          href="https://doi.org/10.1109/ICSPC63060.2024.10862468"
          target="_blank"
          rel="noopener noreferrer"
          className="ieee-link"
        >
          IEEE conference
        </a>, showcased at Open Day, and awarded the Exemplary Capstone Project Award.
      </>
    ),
  },
  {
    title: "🚀 Coming Soon!",
    image: comingSoonImage, // Updated to the GIF
    description: (
      <>
        Stay tuned for my next project! More exciting developments are on the way. 
        Check back soon for updates. 🚀
      </>
    ),
  },
];

const PersonalProjects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-title">Personal Projects</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PersonalProjects;
