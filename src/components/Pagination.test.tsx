// import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  test("renders pagination controls correctly", async () => {
    const mockOnPageChange = jest.fn();
    const mockOnRowsPerPageChange = jest.fn();

    render(
      <Pagination
        totalPages={10}
        currentPage={5}
        siblingCount={1}
        rowsPerPage={10}
        onPageChange={mockOnPageChange}
        onRowsPerPageChange={mockOnRowsPerPageChange}
      />
    );

    expect(screen.getAllByText("Previous").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Next").length).toBeGreaterThan(0);
    expect(screen.getByText("5")).toHaveProperty(
      "className",
      "px-4 py-2 rounded bg-[#171b5a] text-white"
    );

    // expect(screen.getByText("Next")).toBeInTheDocument();
    // expect(screen.getByText("5")).toHaveClass("bg-[#171b5a]"); // Current page
  });

  test("calls onPageChange when a page number is clicked", () => {
    const mockOnPageChange = jest.fn();

    render(
      <Pagination
        totalPages={10}
        currentPage={1}
        rowsPerPage={10}
        siblingCount={1}
        onPageChange={mockOnPageChange}
        onRowsPerPageChange={() => {}}
      />
    );

    fireEvent.click(screen.getByText("2"));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test("calls onRowsPerPageChange when rows per page is updated", () => {
    const mockOnRowsPerPageChange = jest.fn();

    render(
      <Pagination
        totalPages={10}
        currentPage={1}
        siblingCount={1}
        rowsPerPage={10}
        onPageChange={() => {}}
        onRowsPerPageChange={mockOnRowsPerPageChange}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "200" },
    });
    expect(mockOnRowsPerPageChange).toHaveBeenCalledWith(200);
  });
});
