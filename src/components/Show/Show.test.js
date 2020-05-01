import React from "react";
import { shallow, mount, ReactWrapper, ShallowWrapper } from "enzyme";
import Show from "./Show";

describe("Show", () => {
  let comp;
  beforeEach(() => {
    comp = shallow(<Show />);
  });

  it("Show prop is first undefined ", () => {
    expect(comp.prop("shows")).toEqual(undefined);
  });

  // it("renders a div", () => {
  //   expect(comp.type()).toBe("div");
  // });

  // it("button", () => {
  //   comp.find("btn-test").text().toEqual("submit");
  // });

  // it("type", () => {
  //   comp.find(".test").simulate()
  // })
});
