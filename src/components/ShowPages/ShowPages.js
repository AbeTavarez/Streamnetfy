import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import WatchNowBtn from "../WatchNowBtn/WatchNowBtn";
import Loading from "../Loading/Loading";

const ShowPages = ({ showsbypages, isLoading }) => {
  // console.log("--->", showsbypages);

  if (isLoading) return <Loading />;

  const shows =  showsbypages.map((show, idx) => (
    <div key={show.id}>
      <Link to={"/show/" + show.name} key={idx}>
        <div className="card grid-2">
          <div className="all-center">
            <img src={show.image.original} />
          </div>
          <div>
            <div>
              <h3>{show.name}</h3>
              <p>{show.language}</p>
              <p>{show.runtime}m</p>
              {show.genres.map((genre) => (
                <p key={idx + genre}>{genre}</p>
              ))}
              <p>{show.premiered}</p>
              <WatchNowBtn />
            </div>
          </div>
        </div>
      </Link>
    </div>
  ))
  return (
    <div>
     {shows}
    </div>
  );
};

ShowPages.propTypes = {
  showsbypages: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ShowPages;
