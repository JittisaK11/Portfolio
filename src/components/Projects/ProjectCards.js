import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Render GitHub button if GitHub link exists */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Render Research Link button if Research link exists */}
        {props.researchLink && (
          <Button
            variant="primary"
            href={props.researchLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            📚 &nbsp;Research
          </Button>
        )}

        {/* Render Demo Link button if Demo link exists */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;Demo
          </Button>
        )}

      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
