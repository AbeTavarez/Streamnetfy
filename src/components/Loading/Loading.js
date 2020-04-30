import React, { Fragment } from "react";
import loading from "./loading.gif";

export default function Loading() {
  return (
    <Fragment>
      <img
        src={loading}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
}
