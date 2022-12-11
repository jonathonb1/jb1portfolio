import React from "react";
import "../styles/Portfolio.css";
import Runbuddy from "../assets/runbuddy.jpg";
import Weather from "../assets/WeatherDB.png";
import Pets from "../assets/p2h.png";
import Feddit from "../assets/feddit.png";

function Portfolio() {
  return (
    <div>
      <section>
        <div className="projlink">
          <p>Run Buddy</p>
          <a href="https://jonathonb1.github.io/run-buddy/">
            <img
              src={Runbuddy}
              alt="Its me"
              className="justify-content-md-center"
            />
            <hr />
          </a>
          <div>
            <ul>
              {" "}
              Made with:
              <li>html</li>
              <li>css</li>
            </ul>
          </div>
        </div>
        <div className="projlink">
          <p>Weather Dashboard</p>
          <a href="https://jonathonb1.github.io/weather-dashboard/">
            <img
              src={Weather}
              alt="weather application"
              className="justify-content-md-center"
            />
            <hr />
          </a>
          <div>
            <ul>
              {" "}
              Made with:
              <li>html</li>
              <li>css</li>
              <li>JavaScrip</li>
            </ul>
          </div>
        </div>
        <div className="projlink">
          <p>PawsToHome</p>
          <a href="http://ryanpjhickey.github.io/Paws-to-Home">
            <img
              src={Pets}
              alt="pet finder application"
              className="justify-content-md-center"
            />
            <hr />
          </a>
          <div>
            <ul>
              {" "}
              Made with:
              <li>html</li>
              <li>css</li>
              <li>JavaScrip</li>
              <li>jQuery</li>
              <li>Bulma</li>
            </ul>
          </div>
        </div>
        <div className="projlink">
          <p>Feddit</p>
          <a href="https://salty-citadel-37203.herokuapp.com/">
            <img
              src={Feddit}
              alt="pet finder application"
              className="justify-content-md-center"
            />
            <hr />
          </a>
          <div>
            <ul>
              {" "}
              Made with:
              <li>html</li>
              <li>css</li>
              <li>JavaScrip</li>
              <li>Handlebars</li>
              <li>Sequelize</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
