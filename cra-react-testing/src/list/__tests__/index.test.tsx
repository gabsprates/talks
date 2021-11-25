import React from "react";
import { List } from "../index";
import { users } from "../../data/users";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Component: List", () => {
  it("should render an empty list", async () => {
    render(<List users={[]} onClick={jest.fn()} />);

    const notFound = screen.getByText(/no developers found/);
    expect(notFound).toBeInTheDocument();
  });

  it("should render a fill list", () => {
    render(<List users={users} onClick={jest.fn()} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(users.length);
  });

  it("should call spy function on li click", () => {
    const spy = jest.fn();
    render(<List users={users} onClick={spy} />);

    expect(spy).not.toHaveBeenCalled();

    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((userLi) => userEvent.click(userLi));

    expect(spy).toHaveBeenCalledTimes(listItems.length);

    users.forEach((user, index) => {
      const nthCall = index + 1;
      expect(spy).toHaveBeenNthCalledWith(nthCall, user);
    });
  });
});
