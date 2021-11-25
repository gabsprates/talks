import React from "react";
import { render, screen } from "@testing-library/react";
import { Repositories } from "../index";

jest.mock("../../services/github");

const repos = [
  { id: 1234, name: "teste 1", description: "é bem discreto" },
  { id: 5678, name: "teste 2", description: "é bem discreto também" },
];

describe("Component: Repos", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should render with empty state", async () => {
    const github = require("../../services/github");
    jest.spyOn(github, "getUserRepositories").mockResolvedValue([]);

    render(<Repositories username="gabsprates" />);

    expect(
      await screen.findByText(/no repositories found/i)
    ).toBeInTheDocument();
  });

  it("should render when request fail", async () => {
    const github = require("../../services/github");
    jest
      .spyOn(github, "getUserRepositories")
      .mockRejectedValue(new Error("request error"));

    render(<Repositories username="gabsprates" />);

    expect(
      await screen.findByText(/no repositories found/i)
    ).toBeInTheDocument();
  });

  it("should render with a list of repositories", async () => {
    const github = require("../../services/github");
    jest.spyOn(github, "getUserRepositories").mockResolvedValue(repos);

    render(<Repositories username="gabsprates" />);

    expect(
      await screen.findByText(`repositories ${repos.length}`)
    ).toBeInTheDocument();

    expect(screen.getAllByRole("listitem")).toHaveLength(repos.length);
  });
});
