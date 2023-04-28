import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../../../store/tickets";
import { fetchUsers } from "../../../../store/users";
import { useEffect } from "react";
import CollectionRow from "../Rows/CollectionRow";

const CollectionTable = () => {
  const dispatch = useDispatch();
  const { ticketList } = useSelector((state) => state.tickets);
  const { users } = useSelector((state) => state.users);

  const getFullName = (userId) => {
    const user = users.find((user) => user.user_id === userId);
    return user ? `${user.first_name} ${user.last_name}` : "Unknown";
  };

  const getEmail = (userId) => {
    const user = users.find((user) => user.user_id === userId);
    return user ? `${user.email}` : "Unknown";
  };

  useEffect(() => {
    dispatch(fetchTickets());
    dispatch(fetchUsers());
  }, [dispatch]);

  const collectionRow = ticketList.map((ticket) => {
    return (
      <CollectionRow
        key={ticket.ticket_id}
        ticket={ticket}
        fullname={getFullName(ticket.userId)}
        email={getEmail(ticket.userId)}
      />
    );
  });

  return (
    <>
      {/* min-h-screen w3-animate-bottom */}
      <div className="container flex justify-center w-full">
        <div className="col-span-12 w-full p-2 sm:p-4">
          {/* lg:overflow-visible */}
          <div className="overflow-auto">
            <table className="table text-gray-400 border-collapse space-y-6 text-sm w-full">
              <thead className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <tr className="">
                  <th className="p-3 text-left">Ticket ID</th>
                  <th className="p-3 text-left">Customer</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left">Start Date</th>
                  <th className="p-3 text-left">SLA</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Proof of Payment</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>{collectionRow}</tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="pt-5 flex justify-end clear-both">
        <button className="bg-alliance  hover:bg-alliance-darker text-xl text-white p-2 rounded-lg text-right">
          Download as PDF
        </button>
      </div>
    </>
  );
};

export default CollectionTable;
