import { useState } from "react";
import EmpTicketTable from "./Table/EmpTicketTable";
import ModalOverlay from "../../UI/Modal/ModalOverlay";
import ModalCard from "../../UI/Modal/ModalCard";

const EmployeeTicket = () => {
  const [showModal, setShowModal] = useState({
    modal: false,
    detail: false,
    form: false,
  });

  const modalHandler = () => {
    setShowModal((prevState) => ({
      ...prevState,
      modal: false,
      detail: false,
      form: false,
    }));
  };

  const showDetailHandler = () => {
    setShowModal((prevState) => ({
      ...prevState,
      detail: !prevState.detail,
      modal: !prevState.modal,
    }));
  };

  const modalOverlay = showModal.modal && (
    <ModalOverlay modalHandler={modalHandler} />
  );

  const modalDetail = showModal.detail && (
    <>
      <ModalCard>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <p className="font-semibold">Ticket ID :</p>
            <p>1</p>
          </div>
          <div className="flex gap-5">
            <p className="font-semibold">Customer :</p>
            <p>Tiffany Rose Alimusa</p>
          </div>
          <div className="flex gap-5">
            <p className="font-semibold">Description :</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex gap-5">
            <p className="font-semibold">Status :</p>
            <p>Pending</p>
          </div>
          <div className="flex gap-5">
            <p className="font-semibold">Start :</p>
            <p>4/2/2023</p>
          </div>
          <div className="flex gap-5">
            <p className="font-semibold">SLA breach :</p>
            <p>1 Day(s)</p>
          </div>
          <div className="flex gap-5">
            <p className="font-semibold">End :</p>
            <p>4/3/2023</p>
          </div>

          <div className="flex gap-5">
            <p className="font-semibold">File Uploaded :</p>
            <p>tiffany.pdf</p>
          </div>
        </div>
      </ModalCard>
    </>
  );

  const modalForm = showModal.form && (
    <>
      <ModalCard>
        <form>
          <div className="flex flex-col">
            <div className="relative z-10 w-full mx-2 my-5 group sm:w-2/6">
              <input
                type="text"
                name="floating_username"
                id="ticket_id"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ticket ID
              </label>
            </div>
            <div className="relative z-10 w-full mx-2 my-5 group sm:w-2/6">
              <input
                type="text"
                name="floating_username"
                id="ticket_id"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Assignee
              </label>
            </div>
          </div>
        </form>
      </ModalCard>
    </>
  );

  return (
    <>
      {modalOverlay}
      {modalDetail}
      {modalForm}
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg border-2 border-gray-200 shadow-sm mt-14">
          <EmpTicketTable showDetailHandler={showDetailHandler} />
        </div>
      </div>
    </>
  );
};

export default EmployeeTicket;
