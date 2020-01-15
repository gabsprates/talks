import React from "react";
import { mount } from "enzyme";
import { App } from "..";
import styleDevDetails from "../../devDetails/index.scss";

jest.mock("../../services/github");

describe("Component: App", () => {
  it("should render without errors", () => {
    const wrapper = mount(<App />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should open dev details and clean after click the button", () => {
    const wrapper = mount(<App />);

    let button = wrapper.find("button");
    expect(button.exists()).toBeFalsy();

    let user = wrapper.find("li").first();
    user.simulate("click");

    let devDetails = wrapper.find(`.${styleDevDetails.devDetails}`);
    expect(devDetails.exists()).toBeTruthy();

    button = wrapper.find("button");
    button.simulate("click");

    devDetails = wrapper.find(`.${styleDevDetails.devDetails}`);
    expect(devDetails.exists()).toBeFalsy();
    expect(wrapper.find("button").exists()).toBeFalsy();
  });
});
