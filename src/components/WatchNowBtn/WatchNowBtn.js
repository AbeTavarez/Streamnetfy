import React, { Component } from "react";
import "./WatchNowBtn.css";

const WatchNowBtn = (props) => {
  return (
    <div className="primary" type="netflix">
      <h4>Watch now</h4>
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
