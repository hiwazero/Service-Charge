import imagePath from "../../../images/asi-logo-light.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSide, setShowSide] = useState(false);

  const showHandler = () => {
    setShowSide((prevState) => !prevState);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-alliance border-b border-alliance">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
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

              <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
                <img src={imagePath} className="h-8 mr-3" alt="FlowBite Logo" />
                <span className="self-center text-xl text-white font-semibold sm:text-xl whitespace-nowrap">
                  Service Charge
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`${
          showSide &&
          `absolute w-full h-full z-30 opacity-50 bg-gray-900 overflow-hidden`
        }`}
        onClick={showHandler}
      ></div>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 ${
          !showSide && "-translate-x-full"
        } transition-transform bg-alliance border-r border-gray-200 sm:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-alliance">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"createTicket"}
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
                <span className="ml-3">Create Ticket</span>
              </Link>
            </li>
            <li>
              <Link
                to={"ticketRecords"}
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
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Ticket Records
                </span>
              </Link>
            </li>

            <li>
              <Link
                to={"../../"}
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
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                <span className="ml-3">Sign out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;
