import axios from "axios";
import { useEffect, useState } from "react";
import { serverURL } from "../../../../server/serverURL";

const AccountTable = ({submitted, stateHandler}) => {
  const [users, setUsers] = useState([]);
  
  console.log(submitted)

  const getData = async () => {
    // axios.get(`${serverURL()}/users/getAll`).then((response) => {
    //   const data = response.data.data;
    //   setUsers(data);
    // });
    const response = await axios.get(`${serverURL()}/users/getAll`);
    const data = response.data.data;
    setUsers(data);
  };

  useEffect(() => {
    getData();
    // stateHandler()
  }, [submitted]);


  const userData = users.map((user) => {
    return (
      <tr
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        key={user.user_id}
      >
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">{user.first_name}</p>
          </div>
        </td>

        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">MIDDLE NAME</p>
          </div>
        </td>

        <td className="p-3">{user.last_name}</td>
        <td className="p-3">{user.gender}</td>
        <td className="p-3">{user.birth_date}</td>
        <td className="p-3">ROLE</td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">{user.address}</p>
          </div>
        </td>
        <td className="p-3">{user.zipcode}</td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">{user.email}</p>
          </div>
        </td>
        <td className="p-3">{user.phone_number}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="px-4 flex justify-between">
        <form className="flex">
          <input type="text" placeholder="search name here" className="mr-2" />
          <button
            type="submit"
            className={`bg-alliance hover:bg-alliance-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex`}
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            Search
          </button>
        </form>

        <form className="flex">
          <select className="mr-5">
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
        </form>
      </div>
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
                    <div className="description overflow-hidden whitespace-nowrap">
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
