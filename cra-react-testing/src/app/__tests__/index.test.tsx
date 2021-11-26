import React from "react";
import { App } from "../index";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("../../services/github");

describe("Component: App", () => {
  it("should render without errors", () => {
    render(<App />);

    const title = screen.getByRole("heading", { name: /zone/i });
    expect(title).toBeInTheDocument();
  });

  it("should show dev details and hide after click the button", async () => {
    render(<App />);

    let button = screen.queryByText("clear user");
    expect(button).not.toBeInTheDocument();

    const listUsers = screen.getAllByRole("listitem");
    userEvent.click(listUsers[0]);

    await waitFor(() => {
      const loading = screen.queryByText(/loading/);
      expect(loading).not.toBeInTheDocument();
    });

    const devDetails = screen.getByRole("heading", { name: "dev details" });
    expect(devDetails).toBeInTheDocument();

    button = screen.getByRole("button", { name: "clear user" });
    userEvent.click(button);

    expect(devDetails).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
