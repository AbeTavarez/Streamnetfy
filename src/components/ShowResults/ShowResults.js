import React, { Component } from "react";
import { Link } from "react-router-dom";
import WatchNowBtn from "../WatchNowBtn/WatchNowBtn";

const ShowResults = ({ tvshows }) => {
  console.log("sr-->", tvshows);
  return (
    <div>
      {tvshows.map((show, idx) => (
        <div key={idx}>
          <Link to={"/results/" + show.name} key={idx} />
          <div className="card grid-2">
            <div className="all-center">
              <img src={show.show.image.original} />
            </div>
            <div>
              <div>
                <h1>{show.show.name}</h1>
                <p>{show.show.language}</p>
                <p>{show.show.runtime}m</p>
                {show.show.genres.map((genre) => (
                  <p>{genre}</p>
                ))}
                <p>{show.show.premiered}</p>
                <WatchNowBtn />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowResults;

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(1,1fr)",
  gridGap: "1rem",
};

// export const ShowResults = ({ tvshows }) => {
//   return (
//     <div style={{ userStyle }}>
//       {tvshows.map((show) => (
//         <div className="container">
//           <Show resultShows={show} />
//         </div>
//       ))}
//     </div>
//   );
// };
