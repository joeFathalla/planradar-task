// App.tsx
import React, { useEffect, useState } from "react";
import { TICKETSDATA } from "./data/TicketsData";
import TicketsList from "./components/TicketsList";
import Pagination from "./components/Pagination";
const tickets = TICKETSDATA;
// const ticketsPerPage = 100;
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isLoading) {
      timeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    return () => clearTimeout(timeout); // clear the timeout
  }, [isLoading]);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setIsLoading(true);
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows);
    setIsLoading(true);
    setCurrentPage(1); // Reset to the first page
  };

  const totalPages = Math.ceil(tickets.length / rowsPerPage);
  const currentTickets = tickets.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <main className="bg-[#ccc]">
      <div className="px-4 md:p-4 max-w-7xl mx-auto flex flex-col h-[100dvh] justify-between ">
        <div className="h-8 mb-2 md:mb-4">
          <h1 className="text-3xl font-bold ">Ticket List</h1>
        </div>
        <div className="h-[calc(100%-100px)] mb-5 w-full">
          <h3 className="mb-2 text-sm">
            Table list with pagination to custom render fixed amount per page
          </h3>
          <TicketsList
            tickets={currentTickets}
            rowHeight={50}
            perPage={rowsPerPage}
            loading={isLoading}
          />
        </div>
        <div className="h-12">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            siblingCount={1}
            rowsPerPage={rowsPerPage}
            onPageChange={changePage}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
