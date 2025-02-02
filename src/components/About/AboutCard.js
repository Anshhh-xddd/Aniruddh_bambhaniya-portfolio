import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple"> Aniruddh bambhaniya </span>
            from <span className="purple"> Rajkot, Gujrat.</span>
            <br />I have just completed my internship at{" "}
            <span className="purple"> Alphabit Infoway Pvt. Ltd. </span>
            <br />
            I have completed my Integrated BCA from H & H B. Kotak Institute of
            Science in Rajkot.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> listening music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A stunning UI attracts users, a seamless UX retains them, and
            front-end development bridges the gap between design and
            functionality."{" "}
          </p>
          <footer className="blockquote-footer">Aniruddh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
