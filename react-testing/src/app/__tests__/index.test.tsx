import React from "react";
import ReactDOM from "react-dom";
import { App } from "..";
import styleDevDetails from "../../devDetails/index.scss";

jest.mock("../../services/github");

let container: HTMLDivElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null as any;
});

const makeClickEvent = () => new MouseEvent("click", { bubbles: true });

describe("Component: App", () => {
  it("should render without errors", () => {
    ReactDOM.render(<App />, container);
    expect(container.outerHTML).toMatchSnapshot();
  });

  it("should open dev details and clean after click on clear button", () => {
    ReactDOM.render(<App />, container);

    let button = container.querySelector("button");
    expect(button).toBeNull();

    let user = container.querySelector("li");
    user?.dispatchEvent(makeClickEvent());

    const devDetails = container.querySelector(
      `.${styleDevDetails.devDetails}`
    );
    expect(devDetails).toBeInTheDocument();

    button = container.querySelector("button");
    button?.dispatchEvent(makeClickEvent());

    expect(
      container.querySelector(`.${styleDevDetails.devDetails}`)
    ).not.toBeInTheDocument();
    expect(container.querySelector("button")).toBeNull();
  });
});
