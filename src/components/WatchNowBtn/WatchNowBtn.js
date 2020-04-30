import React from "react";
import "./WatchNowBtn.css";

const WatchNowBtn = ({ network }) => {
  // console.log(network);
  return (
    <div className="watchnow">
      <h3>Watch Now</h3>
      {/* <h6>{this.props.network}</h6> */}
      <div>
        {/* {net[0].map((net) => {
          return <p>{net.network.name}</p>;
        })} */}
      </div>
    </div>
  );
};

export default WatchNowBtn;
