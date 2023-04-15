import React, { useState, useEffect } from "react";
import imagePath from "../../../images/asi-logo-light.png";
import { Link } from "react-router-dom";

function HeaderEmployee({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [showSide, setShowSide] = useState(false);

  const showHandler = () => {
    setShowSide((prevState) => !prevState);
  };

  return (
    <>
      <nav className="relative flex flex-wrap  justify-between px-1 py-1 bg-alliance mb-3 top-0 z-50 w-full border-b  border-alliance">
        <div className="container px-3 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              onClick={showHandler}
              className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-alliance focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a className="flex ml-2 py-2 justify-between" href="#">
              <img
                src={imagePath}
                className="h-8 mr-3 inline"
                alt="Alliance Logo"
              />
              <span className=" inline self-center text-xl text-white font-semibold sm:text-xl whitespace-nowrap">
                Service Charge
              </span>
            </a>
            <button
              className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-alliance focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* size */}
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          ></div>

          <button className="justify-between inline py-1">
            <span className="inline text-white uppercase font-bold text-base">
              Tiffany
            </span>
          </button>
        </div>
      </nav>

      {/* opacity-50 bg-gray-900 */}
      <div
        className={`${
          showSide && `absolute w-full h-full z-40 overflow-hidden mb-1`
        }`}
        onClick={showHandler}
      ></div>

      <aside
        // h-screen
        className={`fixed top-0 left-0 z-40 w-64 h-full pt-20 ${
          !showSide && "-translate-x-full"
        } transition-transform bg-alliance border-r border-gray-200 sm:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-alliance">
          <ul className="space-y-2 font-medium mt-4">
            <li>
              <Link
                to={"employeeticket"}
                className="flex items-center p-2 text-white font-semibold rounded-lg hover:bg-alliance-darker"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
                <span className="ml-3">Tickets</span>
              </Link>
            </li>

            <li>
              <Link
                to={"employeenotif"}
                className="flex items-center p-2 text-white font-semibold rounded-lg hover:bg-alliance-darker"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <span className="ml-3">Notifications</span>
              </Link>
            </li>

            <li
              className="flex items-center p-2 text-white font-semibold rounded-lg hover:bg-alliance-darker"
              onClick={() => setShowModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              <span className="ml-3">Sign out</span>
            </li>
          </ul>
        </div>
      </aside>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-2xl font-semibold">Logout</h3>

                  <button
                    type="button"
                    class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-te-modal-dismiss
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  class="relative flex-auto p-4 text-xl"
                  data-te-modal-body-ref
                >
                  Are you sure you want to logout?
                </div>

                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="background-transparent hover: text-alliance-darker font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-alliance  hover:bg-alliance-darker font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <Link to={"/"}>Yes</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default HeaderEmployee;
