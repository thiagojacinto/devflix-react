import React from "react";
import { render } from "@testing-library/react";

import Topbar from "../components/Topbar";
import { MemoryRouter } from "react-router-dom";

describe("Testing Topbar", () => {
  test("Rendering a Logo", () => {
    const bar = render(<Topbar />, { wrapper: MemoryRouter });
    const result = bar.getByRole("img");

    expect(result).toBeDefined();
  });

  test("Rendering a add Button", () => {
    const bar = render(<Topbar />, { wrapper: MemoryRouter });
    const result = bar.getByRole("button", "/Add movie/i");

    expect(result).toBeDefined();
  });
});
