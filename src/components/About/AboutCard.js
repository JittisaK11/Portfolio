import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi everyone, my name is <span className="purple">Jane (Jittisa) Kraprayoon.</span>
            <br />
            I am passionate about software engineering, machine learning, and creating inclusive tech communities. I am also interested in research, startups, and entrepreneurship. At Columbia, I help lead <a href="https://adicu.com" target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue' }}>ADI</a>, the largest tech club on campus.
            <br />
            <br />
            Fun fact: I am originally from Bangkok, Thailand. 🇹🇭
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teaching 📚 (I work as a teaching assistant for AI and Discrete Mathematics and as a volunteer tutor) 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer ⚽️ (kicking it with Columbia Women's Club Soccer)
            </li>
            <li className="about-activity">
              <ImPointRight /> Music 🎤🎸🎷 (I make covers of my favorite songs)
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
