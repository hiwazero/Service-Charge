import { computeAge } from "../../../../hooks/computeAge";
import { setupInterceptor } from "../../../../server/setupInterceptor";
import axios from "axios";
import { serverURL } from "../../../../server/serverURL";

const TreasuryRow = (props) => {
  const { ticket, fullname } = props;
  const isCofirm = "Yes"

  const sendBack = () => {
    const confirmData = new FormData();
    confirmData.append("isConfirm", isCofirm)

    const sendHandler = () => {
        setupInterceptor();
        axios.put(
          `${serverURL()}/ticket/sendBackToCollectionInCharge/${ticket.ticket_id}`
        );
    }

    const confirm = () => {
        setupInterceptor()
        axios.put(`${serverURL()}/ticket/Confirmation/${ticket.ticket_id}`,confirmData)
    }

    if(window.confirm(`Are you sure you want to confirm ticket #${ticket.ticket_id}`)){
        sendHandler()
        confirm()
        window.location.reload()
    }else{
        return
    }
   
  };

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
          <div className="max-w-200px overflow-hidden whitespace-nowrap">
            <p className="truncate">
              {ticket.ticket_start.month} {ticket.ticket_start.dayOfMonth}
              {" , "}
              {ticket.ticket_start.year}
            </p>
          </div>
        </td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">{computeAge(ticket.ticket_start)}</p>
          </div>
        </td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">200</p>
          </div>
        </td>
        <td className="w-4 h-4">
          <button
            onClick={sendBack}
            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          >
            Confirm
          </button>
        </td>
      </tr>
    </>
  );
};

export default TreasuryRow;
