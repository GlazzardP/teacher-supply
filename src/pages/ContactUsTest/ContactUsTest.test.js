import React from "react";
import { render } from "@testing-library/react";
import ContactUsTest from "./ContactUsTest";

describe("ContactUsTest tests", () => {
  it("should render", () => {
    expect(render(<ContactUsTest />)).toBeTruthy();
  });
});
