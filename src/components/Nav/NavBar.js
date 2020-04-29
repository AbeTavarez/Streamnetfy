import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>Streamnetfy</h1>
      </div>
      <div>
        <ul>
          <a to="/">Home</a>

          <a>About</a>
        </ul>
      </div>
    </nav>
  );
};
