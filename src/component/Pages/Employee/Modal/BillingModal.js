import { useEffect, useState } from "react";
import { dateFormatter } from "../../../../hooks/dateFormatter";

const BillingModal = ({ticketInfo}) => {
  const [invoice, setInvoice] = useState({});

  useEffect(()=>{
    setInvoice(ticketInfo)
  },[])

  console.log(invoice)

  const onChangeHandler = (e) => {
        const {id, value} = e.target
        setInvoice(prev => ({...prev, [id]: value}))
  }

  return (
    <>
      <form className="flex flex-col gap-5">
        <div className="flex gap-5">
          <p className="font-semibold">Ticket ID:</p>
          <input
            type="text"
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
            value={invoice.ticket_id}
            onChange={onChangeHandler}
            id="ticket_id"
          ></input>
        </div>
        <div className="flex gap-5">
          <p className="font-semibold">Date:</p>
          <input
            type="text"
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
            value={invoice.ticket_start}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div className="flex gap-5">
          <p className="font-semibold">Amount:</p>
          <input
            type="text"
            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
            // value={ticketData.update_message}
            // onChange={onChangeUpdate}
          ></input>
        </div>

        <button
          type="submit"
          className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
        >
          Create Invoice
        </button>
      </form>
    </>
  );
};

export default BillingModal;
