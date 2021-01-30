import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

describe("LoginForm Comoponent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const wrapper = shallow(<LoginForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("has a disabled submit button when rendered", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const button = wrapper.find("button");
    const disabled = button.prop("disabled");
    expect(disabled).toBe("Username is required");
  });

  it("enables the submit button when proper information is added", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    wrapper.find("input#username").simulate("change", { target: { name: "username", value: "RobertFHinkel" } });
    wrapper.find("input#password").simulate("change", { target: { name: "password", value: "aaAA11!!" } });
    const button = wrapper.find("button");
    const disabled = button.prop("disabled");
    expect(!!disabled).toBe(false);
  });
});
