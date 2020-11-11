import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import EmplyementCard from "./Components/EmploymentCard/EmploymentCard";
import SkillCard from "./Components/SkillCard/SkillCard";
import { Content } from "./content";

const Title = ({ children }: { children: string }) => {
  return <div className="title">{children}</div>;
};

function App() {
  return (
    <div className="App">
      <h3 className="profile">
        <span className="primary">Sendi Fajri</span>, Front End Developer
      </h3>
      <div className="user-detail">
        <p>sendifajri@gmail.com</p>
        <p>Jakarta, Indonesia</p>
        <p>(+62) 0877-8869-6136</p>
      </div>
      <br />
      <Row>
        <Col>
          <Title>Education</Title>
          {Content.educations.map((data) => (
            <EmplyementCard {...data} />
          ))}
          <br />

          <Title>Work</Title>
          {Content.employments.map((data) => (
            <EmplyementCard {...data} />
          ))}
        </Col>
        <Col lg={4}>
          <Title>Skills</Title>
          {Content.skills.map((data) => (
            <SkillCard {...data} />
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default App;
