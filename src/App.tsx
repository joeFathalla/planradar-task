// App.tsx
import React from "react";
import { TICKETSDATA as tickets } from "./data/TicketsData";
import TicketsList from "./components/TicketsList";

const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Ticket List</h1>
      <TicketsList tickets={tickets} />
    </div>
  );
};

export default App;
