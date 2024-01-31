import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.png";
import project6 from "../../Assets/Projects/project6.png";
import project7 from "../../Assets/Projects/project7.png";
import project8 from "../../Assets/Projects/project8.png";
import project9 from "../../Assets/Projects/project9.png";
import project10 from "../../Assets/Projects/project10.png";
import project11 from "../../Assets/Projects/project11.png";
import project12 from "../../Assets/Projects/project12.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Interactive <strong className="purple">Experiences </strong>
        </h1>
        <p style={{ color: "white" }}>Let's dive into my recent creations🚀</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Meals_On_Wheels"
              description="Meals On Wheels is a React.js application that revolutionizes meal support in communities. With a user-friendly interface, it simplifies meal donations, orders, and deliveries"
              ghLink="https://github.com/pan-su-2004/meals_on_wheel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Ecommerce_Website"
              description="I build and deploy a full responsive Ecommerce Website using HTML, CSS, and JavaScript. Explore modern web design fundamentals, from crafting a responsive homepage to building a dynamic shopping cart"
              ghLink="https://github.com/pan-su-2004/EcommerceWebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="QR_Code"
              description="This project is a responsive QR Code Generator web application. Users can input text or URLs, and with a simple click, dynamically generate QR codes. Created using HTML, CSS, and JavaScript, it seamlessly integrates with the QR Server API for efficient QR code generation"
              ghLink="https://github.com/pan-su-2004/QR-code"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="DoBu_Material_Art"
              description="DoBu Martial Arts is a martial arts gym offering diverse classes in martial arts, fitness training, and self-defense courses. This project utilizes HTML, CSS, and JavaScript to create a user registration form with client-side validation"
              ghLink="https://github.com/pan-su-2004/dobu_material_art"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="Math_Quiz_App"
              description="The Math_Quiz mobile app, crafted for an educational charity, empowers young learners in mastering mental arithmetic. With a game format comprising 10 questions covering addition, subtraction, multiplication, and division within the range of 1 to 12, users navigate through three levels of difficulty."
              ghLink="https://github.com/pan-su-2004?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6}
              isBlog={false}
              title="In_A_Box"
              description="I spearheaded the development of In_A_Box's company website in response to the surging demand for their food box delivery services with html,css and bootstrap5."
              ghLink="https://github.com/pan-su-2004/in_a_box"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project7}
              isBlog={false}
              title="Boutiqa_Prototype"
              description="I spearheaded the creation of a prototype for Boutiqa—a dynamic Rich Internet Application catering to both sellers and consumers. The design emphasizes a consumer-centric approach, ensuring an enhanced user experience in the marketplace."
              ghLink="https://github.com/pan-su-2004?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project8}
              isBlog={false}
              title="Drone_Landing"
              description="Crafted with HTML, CSS, and JavaScript, the Drone Landing Page is a dynamic web presence for the Drone.Series racing event. The page features a sleek design with a navigation menu that smoothly slides into view upon activation."
              ghLink="https://github.com/pan-su-2004/drone_landing_page"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project9}
              isBlog={false}
              title="NFT"
              description="Dive into the captivating world of NFTs with this HTML and CSS-driven website with clean layout, responsive design, and engaging content make it a standout project."
              ghLink="https://github.com/pan-su-2004/my_nft"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project10}
              isBlog={false}
              title="Generate_Password"
              description="Explore the simplicity and utility of this web-based tool for generating random passwords. With a modern interface, this project allows users to create secure and unique passwords at the click of a button."
              ghLink="https://github.com/pan-su-2004/generate_password"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project11}
              isBlog={false}
              title="Know_Your_Neighborhood"
              description="Dive into the innovative Know Your Neighborhood (KYN) project, a comprehensive web application designed to connect users with their local community. The project seamlessly integrates various APIs, allowing users to register, login, and explore surrounding stores effortlessly."
              ghLink="https://github.com/pan-su-2004?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project12}
              isBlog={false}
              title="Dashboard"
              description="Experience efficiency and control with the Responsive Dashboard project. This web application boasts a user-friendly interface, granting instant access to vital functionalities through a sidebar navigation system."
              ghLink="https://github.com/pan-su-2004/dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
