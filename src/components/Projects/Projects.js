import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import ivaneatoz from "../../Assets/Projects/ivaneatoz.png";
import filmoji from "../../Assets/Projects/filmoji.png";
import portfolio from "../../Assets/Projects/portfolio.png";
function Projects() {
  return (
    <Container fluid className="project-section">
  
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={filmoji}
              title="Filmoji"
              description=" An advanced entertainment recommendation platform built with React, Redux, Tailwind CSS, and Gemini AI to deliver personalized movie & web series suggestions. With an intuitive UI, seamless state management, and full mobile optimization, Filmoji enhances your streaming experience like never before!"
              ghLink="https://github.com/dev-kartik-js/filmoji"
              demoLink="https://filmoji.web.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              title="Personal Portfolio Website"
              description="A sleek and responsive portfolio website built using HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap. Showcases projects, skills, and experience with an intuitive UI, smooth animations, and a mobile-friendly design."
              ghLink="https://github.com/dev-kartik-js/personal-portfolio"
              demoLink="https://kartik-portfolio-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ivaneatoz}
              title="IvanEatoz – Online Food Delivery App (Under Development)"
              description="A feature-rich food delivery platform built using React, Tailwind CSS, and JavaScript, offering real-time order tracking, seamless user authentication, intuitive menu browsing, and secure payments. Currently under development with plans to enhance user experience and functionality."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
