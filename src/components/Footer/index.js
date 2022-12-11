import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/jonathonb1">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/jonathon-b-20417626/">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2022 Made with love by Jonathon Biala</p>
    </div>
  );
}

export default Footer;
