import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/jane.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m <span className="purple">Jane Kraprayoon</span>, a senior at The Fu Foundation School of Engineering and Applied Science at <span className="purple">Columbia University</span>, majoring in <span className="purple">Computer Science</span>. 
              <br />
              <br />I have experience working with technologies like
              <i>
              <b className="purple"> Python, Apache Spark, SQL, AWS, and more. </b>
              </i>
              <br />
              <br />
              My fields of interest include developing scalable <span className="purple">Data Infrastructure</span>, <span className="purple">Full Stack Development</span>, and exploring <span className="purple">Machine Learning and Artificial Intelligence.</span> I was recently able to delve into some of these interests during my time as a Software Development Engineer Intern at <span className="purple">Amazon Search.</span>
              <br />
              <br />
              I also enjoy mentoring and creating inclusive CS communities through my leadership roles at Columbia!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JittisaK11"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jittisa-kraprayoon-94575218b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/janekrapra"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
