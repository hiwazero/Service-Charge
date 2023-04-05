import axios from "axios";
import { useEffect, useState } from "react";
import { serverURL } from "../../../../server/serverURL";

const AccountTable = (props, { submitted, stateHandler }) => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get(`${serverURL()}/users/getAll`);
    const data = response.data.data;
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, [submitted]);

  const toggleRegister = () => {
    props.toggleRegister();
  };



  const userData = users.map((user) => {
    return (
      <tr
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        key={user.user_id}
      >
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{user.first_name}</p>
          </div>
        </td>

        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">MIDDLE NAME</p>
          </div>
        </td>

        <td className="p-3">{user.last_name}</td>
        <td className="p-3">{user.gender}</td>
        <td className="p-3">{user.birth_date}</td>
        <td className="p-3">{user.role}</td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{user.address}</p>
          </div>
        </td>
        <td className="p-3">{user.zipcode}</td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{user.email}</p>
          </div>
        </td>
        <td className="p-3">{user.phone_number}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="flex px-2 sm:px-4">
        <div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <button
                className={`flex bg-alliance hover:bg-alliance-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                onClick={toggleRegister}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
                Add Account
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="flex px-2 sm:px-4 justify-between">
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
            <option>Customer</option>
            <option>Test</option>
            <option>Test</option>
            <option>Test</option>
            <option>Admin</option>
          </select>
        </div>
      </div>

      {/* <form className="flex">
          <select className="">
            <option>Customer</option>
            <option>Employee</option>
            <option>Admin</option>
          </select>

          <button
            type="submit"
            className={`bg-alliance hover:bg-alliance-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row`}
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
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>
            Filter
          </button>
        </form> */}

      <div className="container flex justify-center min-h-screen w-full w3-animate-bottom">
        <div className="col-span-12 w-full p-2 sm:p-4">
          {/* lg:overflow-visible */}
          <div className="overflow-auto">
            <table className="table text-gray-400 border-collapse space-y-6 text-sm w-full">
              <thead className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <tr className="">
                  <th className="p-3 text-left">First Name</th>
                  <th className="p-3 text-left">Middle Name</th>
                  <th className="p-3 text-left">Last Name</th>
                  <th className="p-3 text-left">Gender</th>
                  <th className="p-3 text-left">Birthdate</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Address</th>
                  <th className="p-3 text-left">Zipcode</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone Number</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <td className="p-3 overflow-hidden whitespace-nowrap">
                    <div className="description overflow-hidden whitespace-nowrap">
                      <p className="truncate">Butch Ryan</p>
                    </div>
                  </td>
                  <td className="p-3 overflow-hidden whitespace-nowrap">
                    <div className="description overflow-hidden whitespace-nowrap">
                      <p className="truncate">Gealon</p>
                    </div>
                  </td>
                  <td className="p-3">Mamac</td>
                  <td className="p-3">M</td>
                  <td className="p-3">04/05/1999</td>
                  <td className="p-3">
                    {/* <span className={`text-gray-50 rounded-md px-2`}> */}
                    Employee
                    {/* </span> */}
                  </td>
                  <td className="p-3 overflow-hidden whitespace-nowrap">
                    <div className="max-w-200px overflow-hidden whitespace-nowrap">
                      <p className="truncate">Punta Princesa Cebu City</p>
                    </div>
                  </td>
                  <td className="p-3">6000</td>
                  <td className="p-3">hiwazero@gmail.com</td>
                  <td className="p-3">09918923830</td>

                  {/* <td className="p-3 ">
                  <div className="flex align-items-center flex-col">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-black mx-2 "
                    >
                      {person.action.first}
                    </a>
                    <a href="#" className="text-gray-500 hover:text-black mx-2">
                      {person.action.second}
                    </a>
                    <a href="#" className="text-gray-500 hover:text-black mx-2">
                      {person.action.third}
                    </a>
                  </div>
                </td> */}
                  <td className="p-3">
                    <div className="flex align-items-center flex-col sm:flex-row">
                      <button>
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
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>

                      <button>
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
                      </button>
                    </div>
                  </td>
                </tr>
                {userData}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountTable;
