import React from "react";
import { mount } from "enzyme";
import Search from "./Search";

describe("Search Component", () => {
  let comp;
  beforeEach(() => {
    comp = mount(<Search />);
  });

  it("Makes sure when the user type in Search Bar field, state updates to match whats typed in the field.", () => {
    comp.find(".test").simulate("change", { target: { value: "searchtest" } });
    expect(comp.state("text")).toBe("searchtest");
  });

  // it("Makes sure when submit button.", () => {
  //   comp.find(".Btn").simulate("click");
  //   expect(comp.state("valid")).toBe(true);
  // });
});
