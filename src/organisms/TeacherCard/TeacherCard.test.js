import React from "react";
import { render } from "@testing-library/react";
import TeacherCard from "./TeacherCard";

describe("TeacherCard tests", () => {
  it("should render", () => {
    expect(render(<TeacherCard />)).toBeTruthy();
  });
});
