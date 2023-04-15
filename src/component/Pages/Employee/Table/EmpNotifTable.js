import React, { useState } from "react";
import UploadFile from "../UploadFile";

const EmpNotifTable = (props) => {
  const showDetailHandler = () => {
    props.showDetailHandler();
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
        <div className="pl-12 py-1 w-[50%] sm:w-[30%]">
          <label className="mx-2 text-lg font-medium">Filter</label>
          <select className="">
            <option>None</option>
            <option>Subject</option>
            <option>Customer</option>
            <option>Reassigned To</option>
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
                  <th className="p-3 text-left">Ticket</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Subject</th>
                  <th className="p-3 text-left">Customer</th>
                  <th className="p-3 text-left">Reassigned To</th>
                  <th className="p-3 text-left">Message</th>
                </tr>
              </thead>
              <tbody>
                <tr className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <td className="p-3">
                    <p className="truncate">1</p>
                  </td>
                  <td className="p-3">4/2/2023</td>
                  <td className="p-3">
                    <div className="description overflow-hidden whitespace-nowrap">
                      <p className="truncate">Ticket Reassignment</p>
                    </div>
                  </td>
                  <td className="p-3 overflow-hidden whitespace-nowrap">
                    <div className="description overflow-hidden whitespace-nowrap">
                      <p className="truncate">Tiffany Rose Alimusa</p>
                    </div>
                  </td>

                  <td className="p-3 overflow-hidden whitespace-nowrap">
                    <div className="description overflow-hidden whitespace-nowrap">
                      <p className="truncate">Harry Potter</p>
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
                    <div className="flex align-items-center flex-col sm:flex-row">
                      <button
                        onClick={showDetailHandler}
                        title="Read whole message"
                      >
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
                </tr>

                {/* 2nd */}
                <tr className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <td className="p-3">
                    <p className="truncate">2</p>
                  </td>
                  <td className="p-3">4/6/2023</td>
                  <td className="p-3">
                    <div className="description overflow-hidden whitespace-nowrap">
                      <p className="truncate">Customer Comment</p>
                    </div>
                  </td>
                  <td className="p-3 overflow-hidden whitespace-nowrap">
                    <div className="description overflow-hidden whitespace-nowrap">
                      <p className="truncate">Tiffany Rose Alimusa</p>
                    </div>
                  </td>

                  <td className="p-3 overflow-hidden whitespace-nowrap">
                    <div className="description overflow-hidden whitespace-nowrap">
                      <p className="truncate">n/a</p>
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
                    <div className="flex align-items-center flex-col sm:flex-row">
                      <button
                        onClick={showDetailHandler}
                        title="Read whole message"
                      >
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
                  <td className="p-3">
                    <div className="m-3"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpNotifTable;
