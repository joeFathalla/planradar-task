// App.tsx
import React, { useEffect, useState } from "react";
import { TICKETSDATA } from "./data/TicketsData";
import TicketsList from "./components/TicketsList";
import Pagination from "./components/Pagination";
const tickets = TICKETSDATA;
const ticketsPerPage = 100;
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalPageCount] = useState(Math.ceil(tickets.length / ticketsPerPage));
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

  useEffect(() => {
    let timeout: number | undefined;
    if (isLoading) {
      timeout = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
    return () => clearTimeout(timeout); // clear the timeout
  }, [isLoading]);

  const changePage = (pageNumber: number) => {
    setIsLoading(true);
    setCurrentPage(pageNumber);
  };

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  const gotToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [currentPage]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Ticket List</h1>
      <TicketsList
        tickets={currentTickets}
        rowHeight={10}
        perPage={ticketsPerPage}
        loading={isLoading}
      />
      <Pagination
        totalPageCount={totalPageCount}
        currentPage={currentPage}
        changePage={changePage}
        goToNextPage={goToNextPage}
        gotToPreviousPage={gotToPreviousPage}
      />
    </div>
  );
};

export default App;
