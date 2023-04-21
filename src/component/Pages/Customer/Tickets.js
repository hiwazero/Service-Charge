import axios from "axios";
import TicketApplications from "./TicketApplications";
import { serverURL } from "../../../server/serverURL";
import { userId } from "../../../hooks/userId";
import { useEffect, useState } from "react";

const Tickets = () => {
    const [tickets, setTickets] = useState([]);

    const fetchTickets = async() => {
        try {
            const response = await axios.get(`${serverURL()}/ticket/getTicketByUser/${userId()}`);
            setTickets(response.data)
        } catch (error) {
            console.log(error)
        }   
    }

    useEffect(()=>{
        fetchTickets();
    },[])

    const ticketList = tickets.map(ticket => {
        return  <TicketApplications key={ticket.ticket_id} ticket={ticket} />
    })

  return (
    <>
      <div className="p-4 sm:ml-64 min-h-screen">
        <div className="p-4 rounded-lg mt-14 border-2 border-gray-200 shadow-sm flex flex-wrap gap-5 justify-center">
           {ticketList}
        </div>
      </div>
    </>
  );
};

export default Tickets;
