// import React, { useEffect, useRef } from "react";
import { useEffect, useRef } from "react";
import { Ticket } from "../data/TicketsType";
import SkeletonRow from "./Skeleton";

const TicketsList = ({
  tickets,
  rowHeight,
  perPage,
  loading,
}: {
  tickets: Ticket[];
  rowHeight: number;
  perPage: number;
  loading: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current && containerRef.current.scrollTo) {
      containerRef.current.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  }, [tickets]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[calc(100%-50px)] overflow-y-auto flex-1 border-1 border-solid border-[#ccc] mb-2 shadow-[0 1px 20px 0 rgba(0, 0, 0, 0.1)] rounded-xl"
    >
      <table className="table-auto w-full border-collapse border border-gray-300 text-xs md:text-base bg-white">
        <thead className="sticky -top-1 bg-blue-900 text-white font-bold">
          <tr>
            <th className="p-2 border border-gray-300">Id</th>
            <th className="p-2 border border-gray-300">Subject</th>
            <th className="p-2 border border-gray-300">Priority</th>
            <th className="p-2 border border-gray-300">Status</th>
            <th className="p-2 border border-gray-300">Description</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: perPage }).map((_, index) => (
                <SkeletonRow key={index} />
              ))
            : tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="hover:bg-gray-100 even:bg-gray-50 text-center "
                  style={{ height: `${rowHeight}px` }}
                >
                  <td
                    className="px-4 py-0 text-xs md:text-base border border-gray-300 text-center"
                    style={{ height: `${rowHeight}px` }}
                  >
                    {ticket.id}
                  </td>
                  <td
                    className="px-4 py-0 text-xs md:text-base border border-gray-300 text-center"
                    style={{ height: `${rowHeight}px` }}
                  >
                    {ticket.subject}
                  </td>
                  <td
                    className="px-4 py-0 text-xs md:text-base border border-gray-300 text-center"
                    style={{ height: `${rowHeight}px` }}
                  >
                    {ticket.priority}
                  </td>
                  <td
                    className="px-4 py-0 text-xs md:text-base border border-gray-300 text-center"
                    style={{ height: `${rowHeight}px` }}
                  >
                    {ticket.status}
                  </td>
                  <td
                    className="px-4 py-0 text-xs md:text-base border border-gray-300 text-left"
                    style={{ height: `${rowHeight}px` }}
                  >
                    {ticket.description}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsList;
