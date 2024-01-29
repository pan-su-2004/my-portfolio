import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import eduImage1 from "../../Assets/educlaas.jpeg";
import eduImage2 from "../../Assets/scrimba.png";
import eduImage3 from "../../Assets/Yadanabo.png";
import eduImage4 from "../../Assets/linkedin.png";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  const qualifications = [
    {
      eduImage: eduImage1,
      title: "EduClaaS Academy | LITHAN",
      field: "Computer Science",
      institution: "Lifelong Learning Institute",
      year: "April 4,2023",
    },
    {
      eduImage: eduImage2,
      title: "Scrimba Academy",
      field: "Frontend Development",
      institution: "Scrimba",
      year: "Sep 9,2023",
    },
    {
      eduImage: eduImage3,
      title: "Yadanabon University",
      field: "English Specialist",
      institution: "Yadanabon",
      year: "11.10.2023",
    },
    {
      eduImage: eduImage4,
      title: "LinkedIn Learning",
      field: "Web Development Foundations",
      institution: "LinkedIn",
      year: "March 24,2023",
    },

    // Add more qualifications as needed
  ];
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
              zIndex: 888,
            }}
            className="about-img"
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/SuC1Fzciyzo?controls=0&autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="Introduction video Pan su"
            ></iframe>
          </Col>
        </Row>

        <Row>
          <h1 className="project-heading">
            My <strong className="purple">Education </strong>
          </h1>
          <p style={{ color: "white" }}>
            Let's dive into my educational qualifications🎓
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {qualifications.map((qualification, index) => (
              <Col md={6} key={index} className="project-card">
                <Card id="edu-card" className="project-card-view  text-start">
                  <Card.Img
                    variant="top"
                    src={qualification.eduImage}
                    alt="card-img"
                    style={{ width: "100px" }}
                  />
                  <Card.Body>
                    <Card.Title> {qualification.title}</Card.Title>
                    <Card.Text>
                      Institution - {qualification.institution}
                    </Card.Text>
                    <Card.Text>Field - {qualification.field}</Card.Text>
                    <Card.Text>Year - {qualification.year}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
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
