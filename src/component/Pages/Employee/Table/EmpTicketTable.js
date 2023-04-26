import SalesRow from "../Rows/SalesRow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../../../store/tickets";
import { fetchUsers } from "../../../../store/users";

const EmpTicketTable = (props) => {
  const dispatch = useDispatch();
  const { ticketList } = useSelector((state) => state.tickets);
  const { users } = useSelector((state) => state.users);


  const getFullName = (userId) => {
    const user = users.find((user) => user.user_id === userId);
    return user ? `${user.first_name} ${user.last_name}` : "Unknown";
  };

  useEffect(() => {
    dispatch(fetchTickets());
    dispatch(fetchUsers())
  }, [dispatch]);


  const salesRow = ticketList.map((ticket) => {
    return (
      <SalesRow
        key={ticket.ticket_id}
        ticket={ticket}
        fullname={getFullName(ticket.userId)}
        showDetailHandler={props.showDetailHandler}
      />
    );
  });

  return (
    <>
      <div className="flex px-2 sm:px-4 justify-between">
        <div className="relative flex">
          <input
            className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-alliance focus:border-alliance focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Search..."
            // ref={searchRef}
            // onKeyDown={handleKeyPress}
          />
          <div
            className="absolute right-0 inset-y-0 flex items-center"
            // onClick={onClearSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div
            className="absolute left-0 inset-y-0 flex items-center"
            // onClick={onClickSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="w-[40%] sm:w-[20%] mx-2">
          <label
            className="block text-sm font-medium text-gray-900 dark:text-black"
            htmlFor="birthdate"
          >
            Filter by status
          </label>
          <select
            id="role_id"
            className="block py-0 px-0 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            // onChange={onChangeHandler}
            // value={roleId}
          >
            {/* <option value={0}>none</option> */}
            <option>None</option>
            <option>New</option>
            <option>Pending</option>
            <option>Close</option>
          </select>
        </div>
      </div>

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
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Update</th>
                  <th className="p-3 text-left">Start</th>
                  <th className="p-3 text-left">SLA</th>
                  <th className="p-3 text-left">Conforme Slip</th>
                  {/* <th className="p-3 text-left">End</th> */}
                  <th className="p-3 text-center" colSpan={2}>
                    Actions
                  </th>
                  {/* <th className="p-3 text-left">Upload Slip</th>
                  <th className="p-3 text-left">Set Status</th>
                  <th className="p-3 text-left">Message</th> */}
                  {/* <th className="p-3 text-left">View</th> */}
                </tr>
              </thead>
              <tbody>
                {salesRow}
              </tbody>
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

export default EmpTicketTable;
