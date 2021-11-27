import React, { Component } from "react";
import "./WatchNowBtn.css";

const WatchNowBtn = (props) => {
  return (
    <div className="btn primary" type="netflix">
      Watch Now!
      {/* <button className={props.type}>{props.lable}</button> */}
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
