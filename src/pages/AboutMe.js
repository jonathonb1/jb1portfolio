import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Home.css";

function AboutMe() {
  return (
    <div className="home">
      <div className="intro">
        <h1 className="intro1">
          Who <span className="heading"> am I </span>?{" "}
        </h1>
        <div className="my-2">
          <p>
            My name is Jonathon and am a software developer who is new in this
            space. I enjoy the process of learning and creating things that dont
            exist!
          </p>
        </div>
      </div>
      <div className="skills">
        <h1>
          S<span className="heading">kills:</span>
        </h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, BootStrap, Bulma, ReactJS, Git, NPM </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, GraphQL, ApolloSever, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default AboutMe;
