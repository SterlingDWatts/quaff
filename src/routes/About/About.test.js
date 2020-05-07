import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import About from "./About";

describe("About Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <About />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
