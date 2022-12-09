import React from "react";
// import "../styles/Navbar.css";]
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
