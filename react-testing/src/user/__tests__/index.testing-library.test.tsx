import React from "react";
import { User } from "../index";
import { render } from "@testing-library/react";

describe("Component: User", () => {
  it("should render without errors", () => {
    const wrapper = render(<User name="prates" github="gabsprates" />);

    expect(wrapper.container.outerHTML).toMatchSnapshot();
    expect(wrapper.getByText("prates"));
  });
});
