import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/pan.png";
import eduImage1 from "../../Assets/educlaas.jpeg";
import eduImage2 from "../../Assets/scrimba.png";
import eduImage3 from "../../Assets/Yadanabo.png";
import eduImage4 from "../../Assets/linkedin.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
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
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              👋 Hey, I'm Pan Su Nadi—a 19-year-old Computer Science student on
              a journey of creativity and code💻
              <br />
              <br />
              🎨 Passionate about
              <i>
                <b className="purple">
                  {" "}
                  UI/UX design and front-end development.{" "}
                </b>
              </i>
              <br />
              <br />
              📚 Currently pursuing
              <i>
                <b className="purple">a Level 5 Higher National Diploma🎓 </b>{" "}
                in <b className="purple">Information Technology.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, Bootstrap, JavaScript, React, Git, and GitHub
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <h1 className="project-heading">
            My <strong className="purple">Education </strong>
          </h1>
          <p style={{ color: "white" }}>
            Let's dive into my educational qualifications🎓🥳
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

        <Row id="ContactInfo">
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let's <span className="purple">connect! 🚀🌐 </span>with me
            </p>
            <p>📧pansu2970@gmail.com | 📞+95 9451335261</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  rel="noreferrer"
                  href="https://github.com/pan-su-2004"
                  target="_blank"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/pan.su.5074/"
                  target="_blank"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/pan-su/"
                  target="_blank"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/pan.su.50746/"
                  target="_blank"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <img
              style={{
                width: "min(100%, 600px)",
                display: "block",
                margin: "0 auto",
              }}
              src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif"
              alt="Gradient Line"
            />
            {/* <Row>
              <Col md={12} className="home-about-gif">
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
