import React from "react";
import { User } from "../index";
import { render, screen } from "@testing-library/react";

describe("Component: User", () => {
  it("should render without errors", () => {
    render(<User name="prates" github="gabsprates" />);

    expect(screen.getByText("prates")).toBeInTheDocument();
    expect(screen.getByText("gabsprates")).toBeInTheDocument();
  });
});
