import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import Logo from "../../assets/logo.png";

function Nav() {
  const [expandNavBar, setExpandNavBar] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavBar((prev) => !prev);
          }}
        >
          {" "}
          <ReorderIcon />{" "}
        </button>
      </div>

      <div className="links">
        <div className="logo">
          <img src={Logo} alt="company logo" />
        </div>
        <Link to="/"> About Me </Link>
        <Link to="/portfolio"> Portfolio </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/resume"> Resume </Link>
      </div>
    </div>
  );
}

export default Nav;
