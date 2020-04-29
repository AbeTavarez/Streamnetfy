import React from "react";
import { withRouter } from "react-router-dom";
import WatchNowBtn from "../WatchNowBtn/WatchNowBtn";
import "./ShowPage.css";

const ShowPage = ({ resultShows: show }) => {
  console.log(show);
  return (
    <div className="card grid-2">
      <div className="all-center">
        <img src={show.image.original} />
      </div>
      <div className="cardShow">
        <h1>{show.name}</h1>
        <div className="lineDetails">
          <p>{show.language}</p>
          <p>{show.runtime}m</p>
          {show.genres.map((genre) => (
            <p>{genre}</p>
          ))}
          <p>{show.premiered}</p>
        </div>

        <WatchNowBtn network={show} />
      </div>
    </div>
  );
};

{
  /* <p>{show.show.summary}</p>
        <h6>{show.show.premiered}</h6> */
}

export default ShowPage;
