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
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-3">Create Ticket</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white font-semibold rounded-lg hover:bg-alliance-darker"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white font-semibold rounded-lg hover:bg-alliance-darker"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white font-semibold rounded-lg hover:bg-alliance-darker"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white font-semibold rounded-lg hover:bg-alliance-darker"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white font-semibold rounded-lg hover:bg-alliance-darker"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </a>
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
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="ml-3">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;
