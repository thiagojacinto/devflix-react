import React from "react";
import { render, queryByTestId } from "@testing-library/react";
import App from "../App";

describe("Testing main app", () => {
  test("Rendering a Logo", () => {
    const renderedApp = render(App);

    expect(queryByTestId(renderedApp, "Logo")).toBeTruthy();
  });
});
