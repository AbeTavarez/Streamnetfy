import React from "react";
import { storiesOf } from "@storybook/react";
import WatchNowBtn from "./WatchNowBtn";

storiesOf("WatchNowBtn", module)
  .add("Primary", () => <WatchNowBtn label="Watch now" type="primary" />)
  .add("Watch on Netflix", () => <WatchNowBtn label="netflix" type="netflix" />)
  .add("Watch on Amazon", () => <WatchNowBtn type="amazon" />)
  .add("Watch on Hulu", () => <WatchNowBtn type="hulu" />)
  .add("Watch on HBO", () => <WatchNowBtn type="hbo" />);
