import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders tickets for the first time", () => {
    render(<App />);
    expect(
      screen.getAllByText("Unauthorized access attempt detected").length
    ).toBeGreaterThan(0);
  });
});
