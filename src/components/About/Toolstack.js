import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiIntellijidea,
  SiEclipseide,
  SiFigma,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h5 style={{ fontSize: "14px" }}>GitHub</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5 style={{ fontSize: "14px" }}>VsCode</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <h5 style={{ fontSize: "14px" }}>Intellij</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <h5 style={{ fontSize: "14px" }}>Eclipse</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <h5 style={{ fontSize: "14px" }}>Figma</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
