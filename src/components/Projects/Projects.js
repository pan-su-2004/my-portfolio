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
import project13 from "../../Assets/Projects/project13.png";
import project14 from "../../Assets/Projects/project14.png";
import ui1 from "../../Assets/Projects/ui1.png";
import ui2 from "../../Assets/Projects/ui2.png";
import ui3 from "../../Assets/Projects/ui3.png";
import ui4 from "../../Assets/Projects/ui4.png";
import ui5 from "../../Assets/Projects/ui5.png";
import ui6 from "../../Assets/Projects/ui6.png";

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
              title="Meals_On_Wheels🥪"
              description="Meals On Wheels is a React.js FullStack development with my teammate that revolutionizes meal support in communities with a user-friendly interface, it simplifies meal donations, orders, and deliveries"
              ghLink="https://github.com/pan-su-2004/meals_on_wheel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Ecommerce_Website🛍️"
              description="The Ecommerce Project is a robust web application aimed at creating a responsive and user-friendly ecommerce platform crafting a responsive homepage to building a dynamic shopping cart"
              ghLink="https://github.com/pan-su-2004/EcommerceWebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="DoBu_Material_Art🥋"
              description="DoBu Martial Arts is a martial arts gym offering diverse classes in martial arts, fitness training, and self-defense courses."
              ghLink="https://github.com/pan-su-2004/dobu_material_art"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="QR_Code🖥️"
              description="This project is a responsive QR Code Generator that users can input text or URLs, and with a simple click, dynamically generate QR codes."
              ghLink="https://github.com/pan-su-2004/QR-code"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="Math_Quiz_App📱"
              description="The Math_Quiz mobile app, crafted for an educational charity, empowers young learners in mastering mental arithmetic with a game format."
              ghLink="https://github.com/pan-su-2004?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6}
              isBlog={false}
              title="In_A_Box🎁"
              description="I spearheaded the development of In_A_Box's company website in response to the surging demand for their food box delivery services with html,css and bootstrap5."
              ghLink="https://github.com/pan-su-2004/in_a_box"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project7}
              isBlog={false}
              title="Boutiqa_Prototype👗"
              description="I spearheaded the creation of a prototype for Boutiqa—a dynamic Rich Internet Application catering to both sellers and consumers."
              ghLink="https://github.com/pan-su-2004?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project8}
              isBlog={false}
              title="Drone_Landing🛰️"
              description="Crafted with HTML, CSS, and JavaScript, the Drone Landing Page is a dynamic web presence for the Drone Series racing event."
              ghLink="https://github.com/pan-su-2004/drone_landing_page"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project9}
              isBlog={false}
              title="FireBase_CatApp🐈"
              description="Building a mobile app that integrates with a Firebase database so that data is persisted across sessions."
              ghLink="https://github.com/pan-su-2004/firebase_catApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project10}
              isBlog={false}
              title="Generate_Password🔑"
              description="This project is a generating random passwords with a modern interface allows users to create secure and unique passwords at the click of a button."
              ghLink="https://github.com/pan-su-2004/generate_password"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project11}
              isBlog={false}
              title="Know_Your_Neighborhood👨‍👩‍👧‍👦"
              description="Know Your Neighborhood project seamlessly integrates various APIs, allowing users to register, login, and explore surrounding stores effortlessly."
              ghLink="https://github.com/pan-su-2004?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project12}
              isBlog={false}
              title="Music Player💿"
              description="The Music Player project is a sleek and intuitive web application designed for an enhanced music playback experience."
              ghLink="https://github.com/pan-su-2004/js-music-player"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project13}
              isBlog={false}
              title="Shopping_List📝"
              description="Developing a user-friendly shopping list application where users can easily add, delete, and mark items as purchased, enhancing their shopping experience."
              ghLink="https://github.com/pan-su-2004/shopping-list-js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project14}
              isBlog={false}
              title="Stop_Watch⏱️"
              description="Creating a Stopwatch application allowing users to accurately measure time intervals with precision and ease."
              ghLink="https://github.com/pan-su-2004/stop-watch-js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ui1}
              isBlog={false}
              title="Charity Organization✨"
              description="UI design for Meals On Wheels charity organization website."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ui2}
              isBlog={false}
              title="GPT_Clone🎭"
              description="Practicing UI/UX design for Chat GPT."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ui3}
              isBlog={false}
              title="Sushi🍣"
              description="UI/UX design with prototype for Sushi Website."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ui4}
              isBlog={false}
              title="Boss Shoes👟"
              description="Practicing UI/UX design for shoes and plants page."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ui5}
              isBlog={false}
              title="Diet🥗"
              description="UI/UX design for diet plan website."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ui6}
              isBlog={false}
              title="Cards🎴"
              description="UI/UX design for cards and forms."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
