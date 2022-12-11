import React from "react";
import Runbuddy from "../assets/runbuddy.jpg";

function Portfolio() {
  return (
    <div>
      <section>
        <div class="projlink">
          <a href="https://jonathonb1.github.io/run-buddy/">
            <img
              src={Runbuddy}
              alt="Its me"
              className="justify-content-md-center"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
