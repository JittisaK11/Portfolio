import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chorely from "../../Assets/Projects/portfolio_project_chorely.png";
import DTW from "../../Assets/Projects/portfolio_project_DTW.png";
import forager from "../../Assets/Projects/portfolio_project_forager.png";
import rightscolab from "../../Assets/Projects/portfolio_project_rights_colab.png";
import mindgalaxy from "../../Assets/Projects/portfolio_project_mind_galaxy.png";
import gosaleng from "../../Assets/Projects/portfolio_project_gosaleng.png";
import emoji from "../../Assets/Projects/portfolio_project_emoji.png";
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
        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chorely}
              isBlog={false}
              title="Chorely - Mobile App"
              description="Chorely is a social task-management mobile app designed to make chore completion and planning a collaborative experience. We used SwiftUI, Firebase Firestore & Authentication, MapKit, RapidAPI, and Lottie. Built in collaboration with friends."
              ghLink="https://github.com/JittisaK11/Chorely"
              demoLink="https://youtu.be/hylqcaq2NeA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DTW}
              isBlog={false}
              title="Extreme Time Warping - Music & Signal Processing Research"
              description="NSF-funded research conducted as part of the Music Information Retrieval Lab at Harvey Mudd College, this research spans signal processing, computer science, and music. Results were published in the Applied Sciences journal: “Improving the Robustness of DTW to Global Time Warping Conditions in Audio Synchronization."
              ghLink="https://github.com/HMC-MIR/ExtremeTimeWarping"
              researchLink="https://www.mdpi.com/2076-3417/14/4/1459"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forager}
              isBlog={false}
              title="FoRAGer - Chatbot Web App"
              description="FoRAGer is a prototype GPT-powered chatbot built as a React app using Tailwind CSS, HTML, and JavaScript. Utilizing Langchain and retrieval-augmented generation (RAG) technology, it allows users to create personalized knowledge bases, upload files, and receive AI-generated responses with transparent source citations. Built in collaboration with friends."
              ghLink="https://github.com/foRAGer-app"
              demoLink="https://www.youtube.com/watch?v=Fy9q9ehHK34"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rightscolab}
              isBlog={false}
              title="Human Rights & Data Science Research"
              description="As part of the Data for Good Scholars Program at Columbia University’s Data Science Institute, I conducted data science research on corporate practices and human rights violations using natural language processing (NLP). Under the guidance of human rights experts—Joanne R. Bauer and Paul Rissman—at Rights CoLab, I contributed to the Labor Conditions in Supply Chains (LCSC) and Diversity, Equity, and Inclusion (DEI) teams."
              researchLink="https://rightscolab.org/using-data-science-to-identify-financially-material-human-rights-and-human-capital-metrics-progress-on-proving-the-concept/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emoji}
              isBlog={false}
              title="Emoji Research 😝 - Using ML & NLP"
              description="Research conducted in the High-Level Vision Lab at Columbia University. Under the guidance of Professor John Kender, this research contributes to cross-cultural multimedia analysis as part of an NSF IIS-funded project. We applied machine learning and natural language processing techniques to analyze emoji usage across diverse cultural groups in the context of the 2022 World Cup, providing insights into cross-cultural communication patterns."
              ghLink="https://github.com/yuhsin-huang/EmojiResearch-WorldCup2022"
              researchLink="https://www.cs.columbia.edu/~jrk/NSFgrants/videoaffinity/Interim/23x_Cindy_Jane.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindgalaxy}
              isBlog={false}
              title="Mind Galaxy - Creatica Hackathon"
              description={
                <span>
                  Our gamified assessment, Mind Galaxy, aims to increase accessibility to mental health assessments, and encourage regular testing for depression. The program gamifies the mental health assessment Center for Epidemiologic Studies-Depression Scale (CES-D). The product—a website built with HTML, CSS, and JavaScript—won 1st place at the Creatica Hackathon.
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
              title="GoSaleng - Thailand National Hackathon"
              description="Our team developed an idea to connect Saleng (street trash collectors) with recyclers through an accessible mobile app as part of a product ideation competition aimed at helping marginalized groups. This project won 1st Place at a National Hackathon organized by the Digital Economy Promotion Agency (DEPA) of Thailand."
              demoLink="https://www.youtube.com/watch?v=zUAlGDenMOc"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
