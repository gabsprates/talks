import React from "react";
import { shallow } from "enzyme";
import { List } from "../index";
import { users } from "../../data/users";

describe("Component: List", () => {
  it("should render an empty list", () => {
    const wrapper = shallow(<List users={[]} onClick={jest.fn()} />);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toMatch("nenhum dev encontrado");
  });

  it("should render a fill list", () => {
    const wrapper = shallow(<List users={users} onClick={jest.fn()} />);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find("li").length).toEqual(users.length);
  });
});
