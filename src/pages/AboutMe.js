import React from "react";
import Mugshot from "../assets/me.jpg";
import "../styles/Home.css";

function AboutMe() {
  return (
    <div className="home">
      <div className="intro">
        {/* <h1 className="intro1">JB</h1> */}
        <section className="myname">
          <div class="content">
            <h2>JonBiala</h2>
            <h2>JonBiala</h2>
          </div>
        </section>
        <div className="me">
          <img
            src={Mugshot}
            alt="Its me"
            className="justify-content-md-center"
          />
        </div>
        <div className="my-2">
          <p>
            My name is Jonathon. I am a software developer who is new in this
            space. I enjoy the process of learning and creating things that dont
            exist! Below are my list of my growing skills. Thank you for
            visiting!!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
