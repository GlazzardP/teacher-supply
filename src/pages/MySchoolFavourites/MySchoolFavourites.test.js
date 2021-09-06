import React from "react";
import { render } from "@testing-library/react";
import MySchoolFavourites from "./MySchoolFavourites";

describe("MySchoolFavourites tests", () => {
  it("should render", () => {
    expect(render(<MySchoolFavourites />)).toBeTruthy();
  });
});
