import imagePath from "../../../images/asi-logo-light.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [showSide, setShowSide] = useState(false);
  const navigate = useNavigate();

  const showHandler = () => {
    setShowSide((prevState) => !prevState);
  };

  const logoutHandler = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("../../");
    } else {
      return;
    }
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
          {/* <div
            id="dropdown-cta"
            className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900 mb-4"
            role="alert"
          >
            <div className="flex items-center">
              <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                Welcome
              </span>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                data-dismiss-target="#dropdown-cta"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="mb-3 text-lg text-blue-800 dark:text-blue-400">
              Butch Ryan Mamac
            </p>
          </div> */}

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
                to={"ticketApplications"}
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
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Applications List
                </span>
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

            <li
              onClick={logoutHandler}
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
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;
