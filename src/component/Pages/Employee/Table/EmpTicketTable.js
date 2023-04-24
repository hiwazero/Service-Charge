const EmpTicketTable = (props) => {
  const showDetailHandler = () => {
    props.showDetailHandler();
  };

  // const getStyles = () => {
  //   return {
  //     background: "bg-alliance",
  //     hover: "bg-alliance-darker",
  //   };
  // };

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
            <option value={0}>none</option>
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
                  <th className="p-3 text-left">Upload Slip</th>
                  <th className="p-3 text-left">Set Status</th>
                  <th className="p-3 text-left">Message</th>
                  {/* <th className="p-3 text-left">View</th> */}
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
                    <div className="max-w-[140px] py-1 px-2 flex justify-center items-center text-white border border-gray-700 bg-gray-700 hover:bg-gray-800 focus:outline-none focus:shadow-outline rounded-lg ">
                      <label
                        for="upload"
                        class="flex items-center gap-2 cursor-pointer"
                      >
                        <svg
                          strokeWidth="20"
                          height="20"
                          fill="currentColor"
                          class="mr-2"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
                        </svg>
                      </label>
                      <input id="upload" type="file" class="hidden" />
                    </div>
                  </td>
                  <td className="p-3">
                    <select className="max-w-50px block py-0 px-0 text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                      <option>new</option>
                      <option>pending</option>
                      <option>closed</option>
                    </select>
                  </td>
                  <td className="p-3">
                    <input
                      className="max-w-250px appearance-none border-2 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-alliance focus:border-alliance focus:shadow-outline"
                      id="username"
                      type="text"
                      // ref={searchRef}
                      // onKeyDown={handleKeyPress}
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
                    </div>
                  </td>
                  <td className="p-3 w-4 h-4">
                    <button
                      className={`bg-alliance hover:bg-alliance-darker text-white font-bold rounded focus:outline-none focus:shadow-outline p-3 flex`}
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
