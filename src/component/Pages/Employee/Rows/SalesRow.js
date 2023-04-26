import axios from "axios";
import { computeAge } from "../../../../hooks/computeAge";
import { dateFormatter } from "../../../../hooks/dateFormatter";
import { filename } from "../../../../hooks/filename";
import { status } from "../../../../hooks/status";
import { serverURL } from "../../../../server/serverURL";

const SalesRow = (props) => {
  const { ticket, fullname } = props;

  const showDetailHandler = () => {
    console.log(ticket)
    props.showDetailHandler(ticket, fullname);
  };

  const submitHandler = () => {
    const forward = async () => {
      try {
        await axios.put(
          `${serverURL()}/ticket/sendToBillingInCharge/${ticket.ticket_id}`
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (window.confirm(`Are you sure you want to forward ticket #${ticket.ticket_id}? `)){
      forward();
      window.location.reload();
    } else {
      return;
    }
  };

  let colorStatus =
    ticket.status_id === 1
      ? "bg-blue-600"
      : ticket.status_id === 2
      ? "bg-yellow-600"
      : "bg-gray-600";

  return (
    <>
      <tr className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <td className="p-3 text-center">
          <p className="truncate">{ticket.ticket_id}</p>
        </td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">{fullname}</p>
          </div>
        </td>
        <td className="p-3">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{ticket.description}</p>
          </div>
        </td>
        <td className="p-3">
          <span className={`${colorStatus} text-gray-50 rounded-md px-2`}>
            {status(ticket.status_id)}
          </span>
        </td>
        <td className="p-3">
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">{ticket.update_message}</p>
          </div>
        </td>
        <td className="p-3">
          <span className={`text-gray-50 rounded-md px-2`}>
            {dateFormatter(ticket.ticket_start)}
          </span>
        </td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">{computeAge(ticket.ticket_start)} day(s)</p>
          </div>
        </td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px description overflow-hidden whitespace-nowrap">
            <p className="truncate">{filename(ticket.original_conformeSlip)}</p>
          </div>
        </td>
        <td className="w-4 h-4">
          <button
            onClick={showDetailHandler}
            className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
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
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </td>
        <td className="pr-3 w-4 h-4">
          <button
            className={`bg-alliance hover:bg-alliance-darker text-white font-bold rounded focus:outline-none focus:shadow-outline p-3 flex`}
            type="button"
            onClick={submitHandler}
            disabled={ticket.status_id === 3 ? false : true}
          >
            Send
          </button>
        </td>
      </tr>
    </>
  );
};

export default SalesRow;
