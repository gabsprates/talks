import React from "react";
import ReactDOM from "react-dom";
import { List } from "../index";
import { users } from "../../data/users";

describe("Component: List", () => {
  it("should render an empty list", () => {
    const container = document.createElement("div");
    ReactDOM.render(<List users={[]} onClick={jest.fn()} />, container);

    expect(container.outerHTML).toMatchSnapshot();
    expect(container.textContent).toMatch("nenhum dev encontrado");
  });

  it("should render a fill list", () => {
    const container = document.createElement("div");
    ReactDOM.render(<List users={users} onClick={jest.fn()} />, container);

    expect(container.outerHTML).toMatchSnapshot();
    expect(container.querySelectorAll("li").length).toEqual(users.length);
  });
});
