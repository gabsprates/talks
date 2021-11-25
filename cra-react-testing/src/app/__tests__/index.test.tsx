import React from "react";
import { App } from "../index";
import { render, fireEvent } from "@testing-library/react";

jest.mock("../../services/github");

describe("Component: App", () => {
  it("should render without errors", () => {
    const wrapper = render(<App />);
    expect(wrapper.container.outerHTML).toMatchSnapshot();
  });

  it("should open dev details and clean after click the button", () => {
    const wrapper = render(<App />);

    let button = wrapper.queryByText("clear user");
    expect(button).toBeNull();

    let user = wrapper.getAllByRole("item-user")[0];
    fireEvent.click(user);

    expect(wrapper.getByText("dev details"));

    user = wrapper.getAllByRole("item-user")[1];
    fireEvent.click(user);

    expect(wrapper.getByText("dev details"));

    button = wrapper.getByText("clear user");
    fireEvent.click(button);

    expect(wrapper.queryByText("dev details")).toBeNull();
    expect(wrapper.queryByText("clear user")).toBeNull();
  });
});
