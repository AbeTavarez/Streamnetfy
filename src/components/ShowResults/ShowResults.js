import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import WatchNowBtn from "../WatchNowBtn/WatchNowBtn";
import Loading from "../Loading/Loading";

const ShowResults = ({ tvshows, isLoading }) => {
  console.log("sr-->", tvshows);

  if (isLoading) return <Loading />;
  return (
    <div>
      {tvshows ? tvshows.map((show, idx) => (
        <div key={idx}>
          <Link to={"/results/" + show.show.name} key={idx}>
            <div className="card grid-2">
              <div className="all-center">
                {!show.show.image ? <p>No Image</p> : 
                  <img src={show.show.image.original}/>
                }
              </div>
              <div>
                <div>
                  <h1>{show.show.name}</h1>
                  <p>{show.show.language}</p>
                  <p>{show.show.runtime}m</p>
                  {show.show.genres.map((genre) => (
                    <p key={idx + genre}>{genre}</p>
                  ))}
                  <p>{show.show.premiered}</p>
                  <WatchNowBtn />
                </div>
              </div>
            </div>
          </Link>
        </div>
      )) : <h1>Not Found</h1>}
    </div>
  );
};

export default ShowResults;

ShowResults.propTypes = {
  tvshows: propTypes.array.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(1,1fr)",
  gridGap: "1rem",
};
