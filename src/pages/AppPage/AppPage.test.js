import React from "react";
import { render } from "@testing-library/react";
import AppPage from "./AppPage";

describe("AppPage tests", () => {
  it("should render", () => {
    expect(render(<AppPage />)).toBeTruthy();
  });
});
