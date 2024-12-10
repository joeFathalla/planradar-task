import React from "react";
import { render, screen } from "@testing-library/react";
import TicketsList from "./TicketsList";

describe("TicketsList Component", () => {
  const sampleTickets = [
    {
      id: 1,
      subject: "Subject 1",
      priority: "High",
      status: "Open",
      description: "Desc 1",
    },
    {
      id: 2,
      subject: "Subject 2",
      priority: "Low",
      status: "Closed",
      description: "Desc 2",
    },
  ];

  test("renders loading skeletons when isLoading is true", () => {
    render(
      <TicketsList tickets={[]} rowHeight={50} loading={true} perPage={5} />
    );
    const skeletonRows = screen.getAllByRole("row");
    expect(skeletonRows.length).toBe(6); // 5 skeleton + header rows for rowsPerPage=5
  });

  test("renders tickets when isLoading is false", () => {
    render(
      <TicketsList
        tickets={sampleTickets}
        rowHeight={50}
        loading={false}
        perPage={5}
      />
    );
    expect(screen.getByText("Subject 1")).toBeInTheDocument();
    expect(screen.getByText("Subject 2")).toBeInTheDocument();
  });
});
