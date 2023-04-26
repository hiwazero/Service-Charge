import { useState } from "react";
import ModalOverlay from "../../UI/Modal/ModalOverlay";
import ModalCard from "../../UI/Modal/ModalCard";
import BillingTable from "./Table/BillingTable";
import BillingModal from "./Modal/BillingModal";

const BillingTicket = () => {
  const [ticketInfo, setTicketInfo] = useState({});
  const [name, setName] = useState("");

  const [showModal, setShowModal] = useState({
    modal: false,
    detail: false,
  });

  const modalHandler = () => {
    setShowModal((prevState) => ({
      ...prevState,
      modal: false,
      detail: false,
    }));
  };

  const showDetailHandler = (ticketInfo, fullname) => {
    setShowModal((prevState) => ({
      ...prevState,
      detail: !prevState.detail,
      modal: !prevState.modal,
    }));

    setTicketInfo(ticketInfo);
    setName(fullname);
  };

  const modalOverlay = showModal.modal && (
    <ModalOverlay modalHandler={modalHandler} />
  );

  const modalDetail = showModal.detail && (
    <>
      <ModalCard>
        <BillingModal
          ticketInfo={ticketInfo}
          modalHandler={modalHandler}
          fullname={name}
        />
      </ModalCard>
    </>
  );

  return (
    <>
      {modalOverlay}
      {modalDetail}
      <div className="p-4 sm:ml-64 w3-animate-bottom">
        <div className="p-4 rounded-lg border-2 border-gray-200 shadow-sm mt-14 h-screen">
          <BillingTable
            showDetailHandler={showDetailHandler}
            modalHandler={modalHandler}
          />
        </div>
      </div>
    </>
  );
};

export default BillingTicket;
