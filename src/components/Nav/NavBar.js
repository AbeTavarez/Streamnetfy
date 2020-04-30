import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="brand-logo site-name">
          <a className="logo-int">
            <Link to="/">Streamnetfy</Link>
          </a>
        </div>
        <div>
          <ul id="nav-mobile" className="nav-btn">
            <li>
              <Link exact to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
