import { useState } from "react";
import { serverURL } from "../../../server/serverURL";
import axios from "axios";
import { dateFormatter } from "../../../hooks/dateFormatter";

const TicketApplications = (props) => {
  const checkConformeSlip = props.ticket.conformeSlip === null ? true : false;

  const [conformeSlip, setConformeSlip] = useState(null);
  const [proofOfPayment, setProofOfPayment] = useState(null);

  const checkSubmit =
    conformeSlip !== null && proofOfPayment !== null ? false : true;
  console.log(checkSubmit);

  const conformeSlipHandler = (e) => {
    setConformeSlip(e.target.files[0]);
  };

  const proofOfPaymentHandler = (e) => {
    setProofOfPayment(e.target.files[0]);
  };

  const downloadHandler = () => {
    const link = document.createElement("a");
    link.href = `${serverURL()}/ticket/download/conformeSlip/${
      props.ticket.ticket_id
    }`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("conformeSlip", conformeSlip);
    formData.append("proofOfPayment", proofOfPayment);

    try {
      axios.post(
        `${serverURL()}/ticket/send/${props.ticket.ticket_id}`,
        formData,
        { headers: { "content-type": "multipart/form-data" } }
      );
      alert("Files submitted successfully");
    } catch (error) {
      console.log(error);
      alert("Files submission failed");
    }
  };

  return (
    <>
      <div className="w-[100%] sm:w-[45%] p-5 border border-2 border-gray-400 border-dashed flex flex-col gap-5">
        <form onSubmit={submitHandler}>
          <div className="flex flex-row gap-4">
            <p className="font-semibold text-sm sm:text-lg">Ticket ID: </p>
            <p className="text-sm sm:text-lg">{props.ticket.ticket_id}</p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="font-semibold text-sm sm:text-lg">Date Started: </p>
            <p className="text-sm sm:text-lg">
              {dateFormatter(props.ticket.ticket_start)}
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="font-semibold text-sm sm:text-lg">Issue: </p>
            <p className="text-sm sm:text-lg">{props.ticket.description}</p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="font-semibold text-sm sm:text-lg">Update: </p>
            <p className="text-sm sm:text-lg">
              Your issue is being fixed by the technician
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="font-semibold text-sm sm:text-lg">Status: </p>
            <p className="text-sm sm:text-lg">{props.ticket.status_id}</p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <p className="font-semibold text-sm sm:text-lg">
              Step 1:{" "}
              <span className="font-normal text-sm sm:text-lg">
                Download Conforme Slip
              </span>
            </p>
            <button
              type="button"
              className="flex cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
              tabIndex="0"
              onClick={downloadHandler}
              disabled={checkConformeSlip}
            >
              <span
                htmlFor="photo-dropbox"
                className="flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 stroke-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                  />
                </svg>
                <span className="text-md font-medium text-gray-600">
                  Download Conforme Slip
                  <span className="text-md text-blue-600 underline px-2">
                    here
                  </span>
                </span>
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <p className="font-semibold text-sm sm:text-lg">
              Step 2:
              <span className="font-normal text-sm sm:text-lg">
                {" "}
                Upload Files
              </span>
            </p>

            <label
              className="flex  cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
              tabIndex="0"
            >
              <span
                htmlFor="photo-dropbox"
                className="flex items-center space-x-2"
              >
                <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                  <path
                    d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></path>
                  <path
                    d="M80,128a80,80,0,1,1,144,48"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></path>
                  <polyline
                    points="118.1 161.9 152 128 185.9 161.9"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></polyline>
                  <line
                    x1="152"
                    y1="208"
                    x2="152"
                    y2="128"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                </svg>
                <span className="text-md font-medium text-gray-600">
                  Attach Conforme Slip
                  <span className="text-md text-blue-600 underline px-2">
                    here
                  </span>
                </span>
              </span>
              <input
                id="photo-dropbox"
                type="file"
                className="sr-only"
                onChange={conformeSlipHandler}
                disabled={checkConformeSlip}
                required
              />
            </label>

            <label
              type="button"
              className="flex cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
              tabIndex="0"
            >
              <span
                htmlFor="photo-dropbox"
                className="flex items-center space-x-2"
              >
                <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                  <path
                    d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></path>
                  <path
                    d="M80,128a80,80,0,1,1,144,48"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></path>
                  <polyline
                    points="118.1 161.9 152 128 185.9 161.9"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></polyline>
                  <line
                    x1="152"
                    y1="208"
                    x2="152"
                    y2="128"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                  ></line>
                </svg>
                <span className="text-md font-medium text-gray-600">
                  Attach Proof of Payment
                  <span className="text-md text-blue-600 underline px-2">
                    here
                  </span>
                </span>
              </span>
              <input
                id="photo-dropbox"
                type="file"
                className="sr-only"
                onChange={proofOfPaymentHandler}
                disabled={checkConformeSlip}
                required
              />
            </label>

            {!checkConformeSlip && (
              <button
                type="submit"
                className="max-w-[100%] py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold text-sm sm:text-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                disabled={checkSubmit}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
                </svg>
                Upload Files
              </button>
            )}

          </div>
          <div className="flex flex-row gap-4 mt-4">
            <p className="font-semibold text-sm sm:text-lg w-[25%] sm:w-[13%]">
              Step 3:
            </p>
            <p className="text-sm sm:text-lg">
              Wait for transactions to be processed
            </p>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <p className="font-semibold text-sm sm:text-lg w-[40%] sm:w-[16%]">
              Step 4:
            </p>
            <p className="text-sm sm:text-lg">
              Done (Check your email for billing statement and OR scan copies)
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default TicketApplications;
