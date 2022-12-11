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
          <h2 className="section-title primary-border">My Resume</h2>
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
            <p>Click the link above to download my resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
