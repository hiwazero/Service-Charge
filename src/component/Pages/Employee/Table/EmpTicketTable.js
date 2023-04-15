const EmpTicketTable = (props) => {
  const showDetailHandler = () => {
    props.showDetailHandler();
  };

  const getStyles = () => {
    return {
      background: "bg-alliance",
      hover: "bg-alliance-darker",
    };
  };

  return (
    <>
      <div className="flex px-2 sm:px-4 justify-between">
        <div className="flex py-1 w-[50%] sm:w-[75%]">
          <input
            type="text"
            placeholder="Search Ticket ID"
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
                  <th className="p-3 text-left">Start</th>
                  <th className="p-3 text-left">SLA</th>
                  <th className="p-3 text-left">End</th>
                  <th className="p-3 text-left">Upload File</th>
                </tr>
              </thead>
              <tbody>
                <tr className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <td className="p-3">
                    <p className="truncate">1</p>
                  </td>
                  <td className="p-3 overflow-hidden whitespace-nowrap">
                    <div className="description overflow-hidden whitespace-nowrap">
                      <p className="truncate">Tiffany Rose Alimusa</p>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="max-w-200px overflow-hidden whitespace-nowrap">
                      <p className="truncate">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="bg-yellow-400 text-gray-50 rounded-md px-2">
                      Pending
                    </span>
                  </td>
                  <td className="p-3">
                    {/* <span className={`text-gray-50 rounded-md px-2`}> */}
                    4/2/2023
                    {/* </span> */}
                  </td>
                  <td className="p-3 overflow-hidden whitespace-nowrap">
                    <div className="description overflow-hidden whitespace-nowrap">
                      <p className="truncate">1 Day(s)</p>
                    </div>
                  </td>
                  <td className="p-3 overflow-hidden whitespace-nowrap">
                    4/3/2023
                  </td>
                  <td className="p-3">
                    <input
                      type="file"
                      id="fileUpload"
                      name="fileUpload"
                      required=""
                      capture
                    />
                  </td>
                  <td className="p-3">
                    <div className="flex align-items-center flex-col sm:flex-row">
                      <button onClick={showDetailHandler}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 mx-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>

                      {/* <button onClick={deleteHandler}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 mx-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button> */}
                    </div>
                  </td>
                  <td className="p-3 w-4 h-4">
                    <button
                      className={`bg-alliance hover:bg-alliance-darker text-white font-bold rounded focus:outline-none focus:shadow-outline p-3`}
                      type="submit"
                    >
                      Send
                    </button>
                  </td>
                </tr>
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
