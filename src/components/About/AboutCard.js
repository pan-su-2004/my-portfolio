import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I'm <span className="purple">Pan Su Nadi </span>
            from <span className="purple"> Mandalay, Myanmar.</span>
            <br />
            I currently taking a Level 5 Higher National Diploma at Educlaas
            Academy, Lithan College.
            <br />
            I'm passionate about UI/UX and front-end development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Vlogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pan su</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
