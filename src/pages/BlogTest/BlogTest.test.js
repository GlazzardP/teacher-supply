import React from "react";
import { render } from "@testing-library/react";
import BlogTest from "./BlogTest";

describe("BlogTest tests", () => {
  it("should render", () => {
    expect(render(<BlogTest />)).toBeTruthy();
  });
});
