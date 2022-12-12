import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import resume from "../assets/JonathonBialaResume.pdf";
import "../styles/Resume.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Resume() {
  return (
    <div>
      <section className="resume">
        <div className="flex-row">
          <h3 className="section-title primary-border">My Resume</h3>
        </div>
      </section>
      <div className="flex-row">
        <div className="download-info">
          <div className="download-text">
            <a href={resume} className="download-logo" download>
              <div className="downloadlink">
                <BsCloudDownload />
              </div>
            </a>
            <p>Click the icon above to download my resume</p>
          </div>
          <div className="skills">
            <div>
              <ol className="list">
                <li className="item">
                  <h1>My Skills:</h1>
                  <h2>Front-End</h2>
                  <span>HTML, CSS, BootStrap, Bulma, ReactJS, Git, NPM </span>
                </li>
                <li className="item">
                  <h2>Back-End</h2>
                  <span>
                    NodeJS, ExpressJS, GraphQL, ApolloSever, MySQL, MongoDB
                  </span>
                </li>
                <li className="item">
                  <h2>Languages</h2>
                  <span>JavaScript, TypeScript</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
