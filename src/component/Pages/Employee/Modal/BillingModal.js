import { dateFormatter } from "../../../../hooks/dateFormatter";

const BillingModal = ({ ticketInfo, fullname }) => {

  //   const [invoice, setInvoice] = useState({});

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <p className="font-semibold">Ticket ID:</p>
          <p>{ticketInfo.ticket_id}</p>
        </div>
        <div className="flex gap-5">
          <p className="font-semibold">Customer Name:</p>
          <p>{fullname}</p>
        </div>
        <div className="flex gap-5">
          <p className="font-semibold">Description:</p>
          <p>{ticketInfo.description}</p>
        </div>
        <div className="flex gap-5">
          <p className="font-semibold">Ticket Created:</p>
          <p>{dateFormatter(ticketInfo.ticket_start)}</p>
        </div>
        <div className="flex gap-5">
          <p className="font-semibold">Amount:</p>
          <p>100</p>
        </div>

        <form className="mt-[5%] flex flex-col gap-5">
          <div className="flex gap-5">
            <p className="font-semibold">Attach Billing File :</p>
            <div className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline ">
              <label
                htmlFor="upload"
                className="flex items-center gap-2 cursor-pointer"
              >
                <svg
                  strokeWidth="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
                </svg>
              </label>
              <input
                id="upload"
                type="file"
                className="hidden"
                //onChange={onChangeFile}
              />
            </div>
          </div>

          <button
            type="submit"
            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          >
            Upload Billing
          </button>
        </form>
      </div>
    </>
  );
};

export default BillingModal;
