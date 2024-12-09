// VirtualizedList.tsx
import { Ticket } from "../data/TicketsType";

const TicketsList = ({ tickets }: { tickets: Ticket[] }) => {
  const visibleTickets = tickets;

  return (
    <div className="overflow-y-auto border border-gray-300">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="sticky top-0 bg-gray-200">
          <tr>
            <th className="p-2 border border-gray-300">Subject</th>
            <th className="p-2 border border-gray-300">Priority</th>
            <th className="p-2 border border-gray-300">Status</th>
            <th className="p-2 border border-gray-300">Description</th>
          </tr>
        </thead>
        <tbody>
          {visibleTickets.map((ticket) => (
            <tr key={ticket.id} className="hover:bg-gray-100 even:bg-gray-50">
              <td className="p-2 border border-gray-300">{ticket.subject}</td>
              <td className="p-2 border border-gray-300">{ticket.priority}</td>
              <td className="p-2 border border-gray-300">{ticket.status}</td>
              <td className="p-2 border border-gray-300">
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
