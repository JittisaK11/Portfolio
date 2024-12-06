import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

import chorely from "../../Assets/Projects/portfolio_project_chorely.png";
import DTW from "../../Assets/Projects/portfolio_project_DTW.png";
import forager from "../../Assets/Projects/portfolio_project_forager.png";
import rightscolab from "../../Assets/Projects/portfolio_project_rights_colab.png";
import mindgalaxy from "../../Assets/Projects/portfolio_project_mind_galaxy.png";
import gosaleng from "../../Assets/Projects/portfolio_project_gosaleng.png";
// import uidesign from "../../Assets/Projects/portfolio_project_UI_design.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={chorely}
              isBlog={false}
              title="Chorely - Mobile App"
              description="Chorely is a social task-management mobile app designed to make chore completion and planning a collaborative experience. By blending productivity with social engagement, Chorely helps users stay organized and connected with friends while working on everyday chores and tasks. Built with SwiftUI, Firebase Firestore & Authentication, MapKit, RapidAPI, and Lottie."
              ghLink="https://github.com/JittisaK11/Chorely"
              demoLink="https://youtu.be/hylqcaq2NeA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DTW}
              isBlog={false}
              title="Extreme Time Warping - Music & Signal Processing Research"
              description="Dynamic time warping (DTW) is a dynamic programming algorithm used to determine the optimal alignment between two sequences. Conducted as part of the Music Information Retrieval Lab at Harvey Mudd College, this research spans signal processing, computer science, and music. It systematically studies the effect of time warping severity on the performance of DTW and experimentally explores several methods to improve its robustness to varying levels of time warping."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              researchLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forager}
              isBlog={false}
              title="FoRAGer - Chatbot Web App"
              description="foRAGer, a prototype GPT-powered chatbot built as a React app using Tailwind CSS, HTML, and JavaScript. Utilizing Langchain and retrieval-augmented generation (RAG) technology, it allows users to create personalized knowledge bases, upload files, and receive AI-generated responses with transparent source citations. Designed to support students, professionals, and small business owners, foRAGer simplifies the analysis of documents, images, and audio files. Built in collaboration with friends."
              ghLink="https://github.com/foRAGer-app"
              demoLink="https://www.youtube.com/watch?v=Fy9q9ehHK34"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rightscolab}
              isBlog={false}
              title="Human Rights & Data Science Research"
              description="This post summarizes findings from data science research on the financial materiality of labor rights conducted by Columbia University's Data Science Institute in collaboration with Rights CoLab. As part of this multi-year project, I worked on the Labor Conditions in Supply Chains (LCSC) and DEI team, where we used NLP techniques to analyze and uncover insights into labor rights issues."
              researchLink="https://rightscolab.org/using-data-science-to-identify-financially-material-human-rights-and-human-capital-metrics-progress-on-proving-the-concept/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindgalaxy}
              isBlog={false}
              title="Mind Galaxy - Gamified Mental Health Assessment"
              description={
                <span>
                  Our gamified assessment, <b>Mind Galaxy</b>, aims to increase accessibility to mental health assessments, and encourage regular testing for depression. The program gamifies the mental health assessment Center for Epidemiologic Studies-Depression Scale (CES-D), which is an instrument that allows patients to evaluate their feelings, behavior, and outlook from their previous week. The product—a website built with <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>—won <b>1st place at the Creatica Hackathon</b>.
                </span>
              }              
              ghLink="https://heeyunki-mp3.github.io/mental_health_game/"
              demoLink="https://devpost.com/software/mind-galaxy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gosaleng}
              isBlog={false}
              title="GoSaleng - National Hackathon Product Pitch"
              description="Our team developed an idea to connect Saleng (street trash collectors) with recyclers through an accessible mobile app as part of a product ideation competition aimed at helping marginalized groups. We conducted market research, interviewing over 30 Saleng and recycling companies, and pitched our idea and prototype to two rounds of judges. This project won 1st Place Best Impact at Hackathon U League for All, organized by the Digital Economy Promotion Agency (depa) of Thailand in August 2022."
              demoLink="https://www.youtube.com/watch?v=zUAlGDenMOc"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
