import { dateFormatter } from "../../../../hooks/dateFormatter";
import { computeAge } from "../../../../hooks/computeAge";

const BillingRow = (props) => {
  const { ticket, fullname } = props;

  const showDetailHandler = () => {
    props.showDetailHandler(ticket, fullname);
  };

  const submitHandler = () => {
    // const forward = async () => {
    //   try {
    //     await axios.put(
    //       `${serverURL()}/ticket/sendToBillingInCharge/${ticket.ticket_id}`
    //     );
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // if (
    //   window.confirm(
    //     `Are you sure you want to forward ticket #${ticket.ticket_id}? `
    //   )
    // ) {
    //   forward();
    //   window.location.reload();
    // } else {
    //   return;
    // }
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
          <span className={`text-black rounded-md px-2`}>
            {dateFormatter(ticket.ticket_start)}
          </span>
        </td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">{computeAge(ticket.ticket_start)} day(s)</p>
          </div>
        </td>
        <td className="p-3 overflow-hidden whitespace-nowrap">
          <div className="description overflow-hidden whitespace-nowrap">
            <p className="truncate">200</p>
          </div>
        </td>
        <td className="w-4 h-4">
          <button
            onClick={showDetailHandler}
            className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            Invoice
          </button>
        </td>
        <td className="pr-3 w-4 h-4">
          <button
            className={`bg-alliance hover:bg-alliance-darker text-white font-bold rounded focus:outline-none focus:shadow-outline p-3 flex`}
            type="button"
            // onClick={submitHandler}
          >
            Send
          </button>
        </td>
      </tr>
    </>
  );
};

export default BillingRow;
