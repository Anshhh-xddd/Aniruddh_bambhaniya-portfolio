import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdHtml, MdCss, MdJavascript } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { SiAdobexd } from "react-icons/si";
import { PiFramerLogoFill } from "react-icons/pi";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiReact,} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <MdHtml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <MdCss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <MdJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobexd />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <PiFramerLogoFill />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;
