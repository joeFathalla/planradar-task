import { Ticket } from "../data/TicketsType";

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
  return (
    <div
      style={{
        overflowY: "auto",
        height: rowHeight * perPage,
        border: "1px solid #ccc",
      }}
    >
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="sticky top-0 bg-gray-200">
          <tr>
            <th className="p-2 border border-gray-300">Id</th>
            <th className="p-2 border border-gray-300">Subject</th>
            <th className="p-2 border border-gray-300">Priority</th>
            <th className="p-2 border border-gray-300">Status</th>
            <th className="p-2 border border-gray-300">Description</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td>loading</td>
              <td>loading</td>
              <td>loading</td>
              <td>loading</td>
              <td>loading</td>
            </tr>
          ) : (
            tickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="hover:bg-gray-100 even:bg-gray-50 text-xs"
                style={{ height: `${rowHeight}px` }}
              >
                <td
                  className="p-0 border border-gray-300"
                  style={{ height: `${rowHeight}px` }}
                >
                  {ticket.id}
                </td>
                <td
                  className="p-0 border border-gray-300"
                  style={{ height: `${rowHeight}px` }}
                >
                  {ticket.subject}
                </td>
                <td
                  className="p-0 border border-gray-300"
                  style={{ height: `${rowHeight}px` }}
                >
                  {ticket.priority}
                </td>
                <td
                  className="p-0 border border-gray-300"
                  style={{ height: `${rowHeight}px` }}
                >
                  {ticket.status}
                </td>
                <td
                  className="p-0 border border-gray-300"
                  style={{ height: `${rowHeight}px` }}
                >
                  {ticket.description}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsList;
