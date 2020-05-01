import React, { Fragment } from "react";
import "./About.css";
import Abe from "./abe.png";

const About = () => {
  return (
    <div className="about-main">
      <h3>About This App</h3>
      <img src={Abe} />
      <div className="details">
        <p>App to search TV Shows</p>
        <p>Version: 1.0.0</p>
      </div>
      <p>
        Thanks to Photo by Mason Kimbarovsky on Unsplash for the Header image.
      </p>
    </div>
  );
};

export default About;
