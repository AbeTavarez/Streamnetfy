import React from "react";
import { Link } from "react-router-dom";
import WatchNowBtn from "../WatchNowBtn/WatchNowBtn";

const ShowPages = ({ showsbypages }) => {
  console.log("--->", showsbypages);
  return (
    <div>
      {showsbypages.map((show, idx) => (
        <div key={idx}>
          <Link to={"/show/" + show.name} key={idx}>
            <div className="card grid-2">
              <div className="all-center">
                <img src={show.image.original} />
              </div>
              <div>
                <div>
                  <h1>{show.name}</h1>
                  <p>{show.language}</p>
                  <p>{show.runtime}m</p>
                  {show.genres.map((genre) => (
                    <p>{genre}</p>
                  ))}
                  <p>{show.premiered}</p>
                  <WatchNowBtn />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowPages;

{
  /* <WatchNowBtn network={this.state.shows} /> */
}
