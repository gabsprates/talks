import React from "react";
import ReactDOM from "react-dom";
import { User } from "../index";

describe("Component: User", () => {
  it("should render without errors", () => {
    const container = document.createElement("div");
    ReactDOM.render(<User name="prates" github="gabsprates" />, container);

    expect(container.outerHTML).toMatchSnapshot();
    expect(container.querySelector("strong")?.textContent).toEqual("prates");
  });
});
