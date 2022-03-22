import React from "react";
import { render, screen } from "@testing-library/react";
import SectionOne from "./SectionOne";


test("renders learn react link", () => {
  const component = render(<SectionOne />);
  const linkElement = component.getByText(/Why stay hungry when you can order form Bella Onojie/i);
  expect(linkElement).toBeInTheDocument();
});
