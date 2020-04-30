import React from "react";
import "./WatchNowBtn.css";

const WatchNowBtn = ({ network }) => {
  return (
    <div className="watchnow">
      <h3>Watch Now</h3>
      {/* <h6>{network}</h6>
      <div>
        {network.map((net) => {
          return <p>{net.network.name}</p>;
        })}
      </div> */}
    </div>
  );
};

export default WatchNowBtn;
