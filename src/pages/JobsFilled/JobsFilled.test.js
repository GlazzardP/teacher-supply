import React from "react";
import { render } from "@testing-library/react";
import JobsFilled from "./JobsFilled";

describe("JobsFilled tests", () => {
  it("should render", () => {
    expect(render(<JobsFilled />)).toBeTruthy();
  });
});
