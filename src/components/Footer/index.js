import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2022 Made with love by Jonathon Biala</p>
    </div>
  );
}

export default Footer;
