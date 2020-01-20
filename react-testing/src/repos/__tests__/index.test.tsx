import React from "react";
import { render, wait, RenderResult } from "@testing-library/react";
import { Repositories } from "../index";

jest.mock("../../services/github");

const repos = [
  { id: 1234, name: "teste 1", description: "é bem discreto" },
  { id: 5678, name: "teste 2", description: "é bem discreto também" }
];

describe("Component: Repos", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should render with empty state", async () => {
    const github = require("../../services/github");
    jest.spyOn(github, "getUserRepositories").mockResolvedValue([]);

    let wrapper: RenderResult;

    await wait(() => {
      wrapper = render(<Repositories username="gabsprates" />);
    });

    expect(wrapper!.getByText(/no repositories found/i));
  });

  it("should render when request fail", async () => {
    const github = require("../../services/github");
    jest
      .spyOn(github, "getUserRepositories")
      .mockRejectedValue(new Error("deu erro na requisição"));

    let wrapper: RenderResult;

    await wait(() => {
      wrapper = render(<Repositories username="gabsprates" />);
    });

    expect(wrapper!.getByText(/no repositories found/i));
  });

  it("should render with a list of repositories", async () => {
    const github = require("../../services/github");
    jest.spyOn(github, "getUserRepositories").mockResolvedValue(repos);

    let wrapper: RenderResult;

    await wait(() => {
      wrapper = render(<Repositories username="gabsprates" />);
    });

    expect(wrapper!.getByText(`repositories ${repos.length}`));
    expect(wrapper!.container.querySelectorAll("li").length).toEqual(
      repos.length
    );
  });
});
