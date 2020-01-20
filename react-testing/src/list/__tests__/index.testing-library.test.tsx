import React from "react";
import { List } from "../index";
import { users } from "../../data/users";
import { render, fireEvent } from "@testing-library/react";

describe("Component: List", () => {
  it("should render an empty list", async () => {
    const wrapper = render(<List users={[]} onClick={jest.fn()} />);
    expect(wrapper.container.outerHTML).toMatchSnapshot();
    expect(wrapper.queryByText("nenhum dev encontrado"));
  });

  it("should render a fill list", () => {
    const wrapper = render(<List users={users} onClick={jest.fn()} />);

    expect(wrapper.container.outerHTML).toMatchSnapshot();
    expect(wrapper.container.querySelectorAll("li").length).toEqual(
      users.length
    );
  });

  it("should call spy function onClick li", () => {
    const spy = jest.fn();
    const wrapper = render(<List users={users} onClick={spy} />);

    expect(spy).not.toHaveBeenCalled();

    const itens = wrapper.getAllByRole("item-user");

    itens.forEach(userLi => {
      fireEvent.click(userLi);
    });
    expect(spy).toHaveBeenCalledTimes(itens.length);
  });
});
