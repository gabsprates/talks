import React from "react";
import { render, screen } from "@testing-library/react";
import { Repositories } from "../index";

jest.mock("../../services/github");

describe("Component: Repos", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should render with empty state", async () => {
    const github = require("../../services/github");
    jest.spyOn(github, "getUserRepositories").mockResolvedValue([]);

    render(<Repositories username="gabsprates" />);

    const notFound = await screen.findByText(/no repositories found/i);
    expect(notFound).toBeInTheDocument();
  });

  it("should render when request fail", async () => {
    const github = require("../../services/github");
    jest
      .spyOn(github, "getUserRepositories")
      .mockRejectedValue(new Error("request error"));

    render(<Repositories username="gabsprates" />);

    const notFound = await screen.findByText(/no repositories found/i);
    expect(notFound).toBeInTheDocument();
  });

  it("should render with a list of repositories", async () => {
    const repos = [
      { id: 1234, name: "test 1", description: "little description here" },
      { id: 5678, name: "test 2", description: "little description here too" },
    ];

    const github = require("../../services/github");
    jest.spyOn(github, "getUserRepositories").mockResolvedValue(repos);

    render(<Repositories username="gabsprates" />);

    const heading = await screen.findByRole("heading", {
      name: `repositories ${repos.length}`,
    });
    expect(heading).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(repos.length);
  });
});
