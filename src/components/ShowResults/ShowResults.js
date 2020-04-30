import React, { Component } from "react";
import Show from "../Show/Show";
import { render } from "enzyme";
// import { withRouter } from "react-router-dom";

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

// export default ShowResults;

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
