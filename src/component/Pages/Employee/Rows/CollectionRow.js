import { computeAge } from "../../../../hooks/computeAge";
import { setupInterceptor } from "../../../../server/setupInterceptor";
import axios from "axios";
import { serverURL } from "../../../../server/serverURL";

const CollectionRow = (props) => {
  const { ticket, fullname, email } = props;

  console.log(typeof ticket.isConfirm);

  const imageClick = () => {
    const downloadURL = `${serverURL()}/ticket/download/proofOfPayment/${
      ticket.ticket_id
    }`;

    setupInterceptor();
    axios
      .get(downloadURL, { responseType: "blob" })
      .then((response) => {
        const url = URL.createObjectURL(response.data);
        const a = document.createElement("a");
        a.href = url;
        a.download = "proof_of_payment.jpg";
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const requestHandler = () => {
    if(window.confirm(`Are you sure you want to send confirmation request in ticket ${ticket.ticket_id}`)){
      axios.put(`${serverURL()}/ticket/sendToTreasury/${ticket.ticket_id}`)
      window.location.reload()
    }else{
      return
    }
  }

  const completeHandler = () => {
    let age = computeAge(ticket.ticket_start)
    const formData = new FormData()
    formData.append("ticket_age", age)

    if(window.confirm(`Are you sure you want to complete transaction in ticket ${ticket.ticket_id}`)){
      axios.put(`${serverURL()}/ticket/ticketDone/${ticket.ticket_id}`, formData)
      window.location.reload()
    }else{
      return
    }
  }

  const actionButton =
    ticket.isConfirm === "No" ? (
      <td className="w-4 h-4">
        <button
          onClick={requestHandler}
          className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Request
        </button>
      </td>
    ) : (
      <td className="w-4 h-4">
        <button
          className={`bg-alliance hover:bg-alliance-darker text-white font-bold rounded focus:outline-none focus:shadow-outline px-4 py-2 m-2 flex`}
          type="button"
          onClick={completeHandler}
        >
            Done
        </button>
      </td>
    );

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
            <p className="truncate">{email}</p>
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
            <p className="truncate">{computeAge(ticket.ticket_start)} day(s)</p>
          </div>
        </td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">{ticket.amount}</p>
          </div>
        </td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="max-w-200px description overflow-hidden whitespace-nowrap">
            <button onClick={imageClick} className="text-blue-600">
              Download
            </button>
          </div>
        </td>
        {actionButton}
      </tr>
    </>
  );
};

export default CollectionRow;
