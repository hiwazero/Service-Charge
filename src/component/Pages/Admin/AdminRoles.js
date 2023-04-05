import { useState } from "react";
import RoleTable from "./Table/RoleTable";
import ModalOverlay from "../../UI/Modal/ModalOverlay";
import ModalCard from "../../UI/Modal/ModalCard";

const AdminRoles = () => {
  const [showModal, setShowModal] = useState({ modal: false, role: false });

  console.log(showModal.modal);

  const toggleAdd = () => {
    setShowModal((prevState) => ({ ...prevState, modal: true, role: true }));
  };

  const modalHandler = () => {
    setShowModal((prevState) => ({ ...prevState, modal: false, role: false }));
  };

  const modalOverlay = showModal.modal && (
    <ModalOverlay modalHandler={modalHandler} />
  );

  const modalCard = showModal.modal && (
    <ModalCard>
      <p>test</p>
    </ModalCard>
  );

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14 border-2 border-gray-200 shadow-sm">
          <div>
            <div className="p-5 sm:px-4 mb-4">
              <form>
                <div className="flex gap-4">
                  <input type="text" />
                  <button
                    className={`flex bg-alliance hover:bg-alliance-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                    onClick={toggleAdd}
                    type="submit"
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
                    Add Role
                  </button>
                </div>
              </form>
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
                <option>Admin</option>
              </select>
            </div>
          </div>
          <RoleTable />
        </div>
      </div>
    </>
  );
};

export default AdminRoles;
