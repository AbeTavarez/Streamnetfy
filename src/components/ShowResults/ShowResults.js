import React from "react";
import Show from "../Show/Show";

export const ShowResults = ({ tvshows }) => {
  return (
    <div style={{ userStyle }}>
      {tvshows.map((show) => (
        <div className="container">
          <Show resultShows={show} />
        </div>
      ))}
    </div>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(1,1fr)",
  gridGap: "1rem",
};
