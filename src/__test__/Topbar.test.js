import React from "react";
import { render } from "@testing-library/react";

import Topbar from "../components/Topbar";

describe("Testing Topbar", () => {
  test("Rendering a Logo", () => {
    const bar = render(<Topbar />);
    const result = bar.getByRole("img");

    expect(result).toBeDefined();
  });

  test("Rendering a add Button", () => {
    const bar = render(<Topbar />);
    const result = bar.getByRole("button", "/Add movie/i");

    expect(result).toBeDefined();
  });
});
