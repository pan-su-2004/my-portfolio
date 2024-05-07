import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiMysql,
  DiGit,
  DiBootstrap,
} from "react-icons/di";
import {
  SiGithub,
  SiAdobephotoshop,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5 style={{ fontSize: "14px" }}>JavaScript</h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5 style={{ fontSize: "14px" }}>React</h5>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h5 style={{ fontSize: "14px" }}>HTML</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h5 style={{ fontSize: "14px" }}>MySQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <h5 style={{ fontSize: "14px" }}>BootStrap</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5 style={{ fontSize: "14px" }}>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h5 style={{ fontSize: "14px" }}>GitHub</h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <h5 style={{ fontSize: "14px" }}>Adobe</h5>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h5 style={{ fontSize: "14px" }}>Tailwind</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite />
        <h5 style={{ fontSize: "14px" }}>Vite</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
