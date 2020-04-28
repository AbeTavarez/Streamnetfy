import React from "react";
import { withRouter } from "react-router-dom";

const Show = ({ resultShows: show }) => {
  console.log(show);
  return (
    <div className="card grid-2">
      <div className="all-center">
        <img src={show.show.image.original} />
      </div>
      <div className="cardShow">
        <h3>{show.show.name}</h3>
        {show.show.genres.map((genre) => (
          <p>{genre}</p>
        ))}
        <p>{show.show.summary}</p>
        <h6>{show.show.premiered}</h6>
      </div>
    </div>
  );
};

export default Show;
