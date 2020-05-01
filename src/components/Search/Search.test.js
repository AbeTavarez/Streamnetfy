import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

describe("Search Component", () => {
  let comp;
  beforeEach(() => {
    comp = shallow(<Search />);
  });

  it("renders a div", () => {
    expect(comp.type()).toBe("div");
  });

  it("intial state to be a empty string", () => {
    expect(comp.state("text")).toBe("");
  });

  it("Makes sure when the user type in Search Bar field, state updates to match whats typed in the field.", () => {
    comp.find(".test").simulate("change", { target: { value: "searchtest" } });
    expect(comp.state("text")).toBe("searchtest");
  });

  it("Makes sure when submit button.", () => {
    comp.find(".form-test").simulate("click");
    expect(comp.state("validEntry")).toBe(false);
  });
});
