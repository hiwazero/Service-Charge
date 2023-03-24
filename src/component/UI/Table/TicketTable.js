import axios from "axios";
import { useEffect, useState } from "react";
import { serverURL } from "../../../server/serverURL";
import "./TicketTable.css";

const TicketTable = () => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
      axios.get(`${serverURL()}/ticket/getAll`)
      .then(response => {
        const res = response.data.data
        // const responseData = res.data.data
        setTickets(res);
      })
  }, []);

  console.log(tickets);

  const test = (
    <ul>
      {tickets.map(ticket => {
        return (
        <li key={ticket.ticketId}>{ticket.ticketId}</li>
        )
      })}
    </ul>
  )


  const DUMMY = [
    {
      ticket_id: "1",
      desc: "This is a description This is a description This is a description This is a description This is a description This is a description This is a description",
      name: "Butch Ryan Mamac",
      priority: "Normal",
      dateStart: "April 5, 1999",
      dateClosed: "NA",
      status: "New",
      ticketAge: "1 day(s) ago",
      assign: "Karen",
      action: { first: "Open", second: "Mark pending", third: "Mark closed" },
    },
    {
      ticket_id: "2",
      desc: "This is a description",
      name: "Rhenalyn Amado",
      priority: "Urgent",
      dateStart: "April 3, 1999",
      dateClosed: "April 5, 1999",
      status: "Closed",
      ticketAge: "1 day(s) ago",
      assign: "Karen",
      action: { first: "Open", second: "Mark pending", third: "Mark closed" },
    },
    {
      ticket_id: "3",
      desc: "This is a description",
      name: "Jomar Cuetara",
      priority: "Urgent",
      dateStart: "April 5, 1999",
      dateClosed: "NA",
      status: "Pending",
      ticketAge: "1 day(s) ago",
      assign: "Karen",
      action: { first: "Open", second: "Mark pending", third: "Mark closed" },
    },
  ];

  const data = DUMMY.map((person) => {
    let colorIndicator =
      person.priority === "Normal" ? "bg-green-600" : "bg-red-600";
    let colorStatus =
      person.status === "New"
        ? "bg-blue-600"
        : person.status === "Pending"
        ? "bg-yellow-600"
        : "bg-gray-600";

    return (
      <tr
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        key={person.ticket_id}
      >
        <td className="p-3">{person.ticket_id}</td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">{person.desc}</p>
          </div>
        </td>
        <td className="p-3">{person.name}</td>
        <td className="p-3">
          <span className={`${colorIndicator} text-gray-50 rounded-md px-2`}>
            {person.priority}
          </span>
        </td>
        <td className="p-3">{person.dateStart}</td>
        <td className="p-3">{person.dateClosed}</td>
        <td className="p-3">
          <span className={`${colorStatus} text-gray-50 rounded-md px-2`}>
            {person.status}
          </span>
        </td>
        <td className="p-3">{person.ticketAge}</td>
        <td className="p-3">{person.assign}</td>

        <td className="p-3 ">
          <div className="flex align-items-center flex-col">
            <a href="#" className="text-gray-500 hover:text-black mx-2 ">
              {person.action.first}
            </a>
            <a href="#" className="text-gray-500 hover:text-black mx-2">
              {person.action.second}
            </a>
            <a href="#" className="text-gray-500 hover:text-black mx-2">
              {person.action.third}
            </a>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
    {test}
    <div className="container flex justify-center min-h-screen w-screen w3-animate-bottom">
      <div className="dataWrapper col-span-12 w-screen p-2 sm:p-4">
        <div className="overflow-auto lg:overflow-visible">
          <table className="table text-gray-400 border-collapse space-y-6 text-sm w-screen">
            <thead className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <tr className="">
                <th className="p-3 text-left">Ticket ID</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Customer Name</th>
                <th className="p-3 text-left">Priority</th>
                <th className="p-3 text-left">Date Issued</th>
                <th className="p-3 text-left">Date Closed</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Ticket Age</th>
                <th className="p-3 text-left">Assignee</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default TicketTable;
