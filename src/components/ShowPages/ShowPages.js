import React, { Fragment } from "react";
import ShowPage from "../ShowPage/ShowPage";

const ShowPages = ({ showpages }) => {
  return (
    <div>
      {showpages.map((show, idx) => (
        <div key={idx}>
          <ShowPage resultShows={show} />
        </div>
      ))}
    </div>
  );
};

export default ShowPages;
