import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>Streamnetfy</h1>
      </div>
      <div>
        <Router>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="../About/About">
              <li>About</li>
            </Link>
          </ul>
        </Router>
      </div>
    </nav>
  );
};
