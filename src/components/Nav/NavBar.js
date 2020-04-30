import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo site-name">
          Streamnetfy
        </Link>
        <div>
          <Router>
            <ul id="nav-mobile" className="nav-btn">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="../About/About">
                <li>About</li>
              </Link>
              <li></li>
            </ul>
          </Router>
        </div>
      </div>
    </nav>
  );
};
