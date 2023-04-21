import { dateFormatter } from "../../../../hooks/dateFormatter";

const TicketRows = (props) => {
  return (
    <>
      <tbody>
        <tr className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <td className="p-3">
            <p className="truncate">{props.ticketData.ticket_id}</p>
          </td>
          <td className="p-3 overflow-hidden whitespace-nowrap">
            <div className="description overflow-hidden whitespace-nowrap">
              <p className="truncate">{props.ticketData.assignee_id}</p>
            </div>
          </td>
          <td className="p-3">
            <span className="bg-yellow-400 text-gray-50 rounded-md px-2">
              {props.ticketData.status_id}
            </span>
          </td>
          <td className="p-3">
            <div className="max-w-200px overflow-hidden whitespace-nowrap">
              <p className="truncate">
                {props.ticketData.description}
              </p>
            </div>
          </td>
          <td className="p-3">
            {/* <span className={`text-gray-50 rounded-md px-2`}> */}
            {dateFormatter(props.ticketData.ticket_start)}
            {/* </span> */}
          </td>
          <td className="p-3 overflow-hidden whitespace-nowrap">{dateFormatter(props.ticketData.ticket_end)}</td>
          <td className="p-3">image.jpeg</td>
          <td className="p-3">gcash.jpeg</td>
        </tr>
      </tbody>
    </>
  );
};

export default TicketRows;
