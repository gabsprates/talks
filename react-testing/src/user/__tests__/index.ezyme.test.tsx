import React from "react";
import { User } from "../index";
import { shallow } from "enzyme";

describe("Component: User", () => {
  it("should render without errors", () => {
    const wrapper = shallow(<User name="prates" github="gabsprates" />);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find("strong").text()).toMatch("prates");
  });
});
