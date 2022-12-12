import React from "react";
import "../styles/Portfolio.css";
import Runbuddy from "../assets/runbuddy.jpg";
import Weather from "../assets/WeatherDB.png";
import Pets from "../assets/p2h.png";
import Feddit from "../assets/feddit.png";
import Onlycooks from "../assets/onlycooks.png";

function Portfolio() {
  return (
    <div>
      <section>
        <div className="projlink">
          <a href="https://jonathonb1.github.io/run-buddy/">
            <img src={Runbuddy} alt="Its me" className="works" />
            <a href="https://github.com/jonathonb1/run-buddy" className="link">
              Run Buddy Repository
            </a>
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
          <a href="https://jonathonb1.github.io/weather-dashboard/">
            <img src={Weather} alt="weather application" className="works" />
            <a
              href="https://github.com/jonathonb1/weather-dashboard"
              className="link"
            >
              Weather Dashboard Repository
            </a>
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
          <a href="http://ryanpjhickey.github.io/Paws-to-Home">
            <img src={Pets} alt="pet finder application" className="works" />
            <a
              href="https://github.com/jonathonb1/Paws-to-Home"
              className="link"
            >
              Paws-To-Home Respository
            </a>
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
          <a href="https://salty-citadel-37203.herokuapp.com/">
            <img src={Feddit} alt="pet finder application" className="works" />
            <a href="https://github.com/jonathonb1/feddit" className="link">
              Feddit Repository
            </a>
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
        <div className="projlink">
          <a href="https://pure-ocean-13235.herokuapp.com/">
            <img
              src={Onlycooks}
              alt="pet finder application"
              className="works"
            />
            <a href="https://github.com/zuetesei/cook-book" className="link">
              Onlycooks Repository
            </a>
            <hr />
          </a>
          <div>
            <ul>
              {" "}
              Made with:
              <li>html</li>
              <li>css</li>
              <li>JavaScrip</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>React</li>
              <li>NPM</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
