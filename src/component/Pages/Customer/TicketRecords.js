import { serverURL } from "../../../server/serverURL";
import { userId } from "../../../hooks/userId";
import { useEffect, useState } from "react";
import axios from "axios";
import TicketRows from "./Rows/TicketRows";

const TicketRecords = () => {
  const [ticketList, setTicketList] = useState([]);

  const getTickets = async () => {
    try {
      const response = await axios.get(
        `${serverURL()}/ticket/getTicketByUser/${userId()}`
      );
      const res = response.data;
      setTicketList(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  console.log(ticketList);

  const ticketRows = ticketList.map((list) => {
    return <TicketRows key={list.ticket_id} ticketData={list} />;
  });

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14 border-2 border-gray-200 shadow-sm">
          {/* <div className="flex px-2 sm:px-4 justify-between">
            <div className="flex py-1 w-[50%] sm:w-[75%]">
              <input
                type="text"
                placeholder="Search ID"
                className="w-[80%] sm:w-[50%]"
              />
              <button
                className={`bg-alliance hover:bg-alliance-darker text-white font-bold py-2 px-4 ml-1 rounded focus:outline-none focus:shadow-outline`}
                type="submit"
              >
                Search
              </button>
            </div>
            <div className="pl-12 py-1 w-[50%] sm:w-[25%]">
              <label className="mx-2 text-lg font-medium">Filter</label>
              <select className="">
                <option>None</option>
                <option>New</option>
                <option>Ongoing</option>
                <option>Completed</option>
              </select>
            </div>
          </div> */}
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
                Sort by role
              </label>
              <select
                id="role_id"
                className="block py-0 px-0 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                // onChange={onChangeHandler}
                // value={roleId}
              >
                <option value={0}>none</option>
                {/* {roles.map((role) => (
                  <option key={role.role_id} value={role.role_id}>
                    {role.role}
                  </option>
                ))} */}
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
                      <th className="p-3 text-left">Assignee</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-left">Description</th>
                      <th className="p-3 text-left">Start</th>
                      <th className="p-3 text-left">End</th>
                      <th className="p-3 text-left">Conforme Slip</th>
                      <th className="p-3 text-left">Payment</th>
                    </tr>
                  </thead>
                  {ticketRows}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketRecords;
