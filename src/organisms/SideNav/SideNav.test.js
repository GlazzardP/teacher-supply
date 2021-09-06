import React from "react";
import { render } from "@testing-library/react";
import SideNav from "./SideNav";

describe("SideNav tests", () => {
  it("should render", () => {
    expect(render(<SideNav />)).toBeTruthy();
  });
});
