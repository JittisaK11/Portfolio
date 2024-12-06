import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong> (on GitHub)
      </h1>
      <GitHubCalendar
        username="JittisaK11"
        blockSize={15}
        blockMargin={5}
        color="#84f5c0"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
