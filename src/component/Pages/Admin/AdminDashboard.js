const AdminDashboard = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        {/* border-2 border-gray-200 shadow-sm */}
        <div className="p-4 rounded-lg border-2 border-gray-200 shadow-sm mt-14">
          <div className="flex flex-col sm:flex-row justify-around gap-y-2 sm:gap-x-8">
            <div className="border-2 border-gray-200 gap-4 rounded-lg w-full sm:w-1/4 flex items-center justify-center bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-50 h-14 text-white center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <div className="flex flex-col">
                <p className="text-white text-center font-medium">Accounts</p>
                <p className="text-white text-center">100</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 gap-4 rounded-lg w-full sm:w-1/4 flex items-center justify-center bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-50 h-10 text-white center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>

              <div className="flex flex-col">
                <p className="text-white text-center font-medium">New</p>
                <p className="text-white text-center">200</p>
              </div>
            </div>

            {/* <div className="border-2 border-gray-200 rounded-lg w-full sm:w-1/4 flex sm:flex-col bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-50 h-10 text-white center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>
              <p className="text-white text-center">200 New Tickets</p>
            </div> */}
            {/* <div className="border-2 border-gray-200 rounded-lg w-full sm:w-1/4">
              300 Ongoing Tickets
            </div> */}

            <div className="border-2 border-gray-200 gap-4 rounded-lg w-full sm:w-1/4 flex items-center justify-center bg-yellow-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-50 h-10 text-white center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>

              <div className="flex flex-col">
                <p className="text-white text-center font-medium">Ongoing</p>
                <p className="text-white text-center">300</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 gap-4 rounded-lg w-full sm:w-1/4 flex items-center justify-center bg-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-50 h-10 text-white center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <div className="flex flex-col">
                <p className="text-white text-center font-medium">Completed</p>
                <p className="text-white text-center">400</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
