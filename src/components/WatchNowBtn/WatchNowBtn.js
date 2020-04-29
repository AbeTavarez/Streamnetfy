import React from "react";
import "./WatchNowBtn.css";

const WatchNowBtn = ({ network: net }) => {
  console.log(net);
  return (
    <div className="watchnow">
      <h3>Watch Now</h3>
      <div>
        {/* {net[0].map((net) => {
          return <p>{net.network.name}</p>;
        })} */}
      </div>
    </div>
  );
};

export default WatchNowBtn;
