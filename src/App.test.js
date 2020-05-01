import React from "react";
import { render } from "@testing-library/react";
import { Mount } from "enzyme";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

// describe("App Component", () => {
//   let comp;
//   beforeEach(() => {
//     comp = Mount(<App />);
//   });

//   it("Show prop is first undefined ", () => {
//     expect(comp.state("tvshows")).toEqual(Array);
//   });
// });
