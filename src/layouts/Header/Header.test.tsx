import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header/>", () => {
  test("renders home link", () => {
    render(<Header />);
    const homeButton = screen.getByRole("link", {
      name: /home/i,
    });
    expect(homeButton).toBeInTheDocument();
    screen.debug();
    expect(homeButton.style.color).toBe("#fa4a0c");
  });
});
