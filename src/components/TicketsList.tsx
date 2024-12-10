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
    if (containerRef.current) {
      containerRef.current.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  }, [tickets]);

  return (
    <div
      ref={containerRef}
      className="overflow-y-auto flex-1 border-1 border-solid border-[#ccc] mb-2"
    >
      <table className="table-auto w-full border-collapse border border-gray-300">
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
                  className="hover:bg-gray-100 even:bg-gray-50 text-center"
                  style={{ height: `${rowHeight}px` }}
                >
                  <td
                    className="p-0 border border-gray-300 text-center"
                    style={{ height: `${rowHeight}px` }}
                  >
                    {ticket.id}
                  </td>
                  <td
                    className="p-0 border border-gray-300 text-center"
                    style={{ height: `${rowHeight}px` }}
                  >
                    {ticket.subject}
                  </td>
                  <td
                    className="p-0 border border-gray-300 text-center"
                    style={{ height: `${rowHeight}px` }}
                  >
                    {ticket.priority}
                  </td>
                  <td
                    className="p-0 border border-gray-300 text-center"
                    style={{ height: `${rowHeight}px` }}
                  >
                    {ticket.status}
                  </td>
                  <td
                    className="p-0 border border-gray-300 text-left"
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
