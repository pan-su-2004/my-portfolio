import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                paddingInline: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Get to Know <strong className="purple">Me</strong>
              <img
                src="https://user-images.githubusercontent.com/74038190/213844263-a8897a51-32f4-4b3b-b5c2-e1528b89f6f3.png"
                alt="background-gif"
                style={{ width: "40px", height: "40px" }}
              />
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{
              paddingTop: "50px",
              paddingBottom: "50px",
              cursor: "pointer",
            }}
            className="about-img"
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/SuC1Fzciyzo?controls=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="Introduction video Pan su"
            ></iframe>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
