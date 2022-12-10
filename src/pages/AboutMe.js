import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Home.css";
import Illustration from "../assets/cooks.jpg";

function AboutMe() {
  return (
    <div className="home">
      <Container>
        <Row className="about-app">
          <Col sm={8}>
            <div className="intro">
              <h1>
                {" "}
                {/* What is <span className="only-cooks"> OnlyCooks </span>?{" "} */}
              </h1>
              <div className="my-2">
                {/* <p>
                  Only Cooks is a social platform where you can store your most
                  treasured recipes privately or share with friends. If you are
                  looking for a new and cool recipe to impress your loved ones,
                  you can explore our database of recipes from kitchens across
                  the globe! All are welcome to join this community of cooks and
                  creators!
                </p>
                <img
                  src={Illustration}
                  alt="two cooks"
                  className="justify-content-md-center" */}
                />
              </div>
            </div>
          </Col>
          <Col className="sm={4}"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
