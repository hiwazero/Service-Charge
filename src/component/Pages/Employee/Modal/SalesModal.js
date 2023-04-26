import axios from "axios";
import { filename } from "../../../../hooks/filename";
import { useState } from "react";
import { serverURL } from "../../../../server/serverURL";

const SalesModal = ({ ticketInfo, fullname, modalHandler }) => {
  const [file, setFile] = useState(null);
  const [ticketData, setTicketData] = useState({
    update_message:
      ticketInfo.update_message !== null
        ? ticketInfo.update_message
        : undefined,
    status_id: ticketInfo.status_id,
  });

  const onChangeUpdate = (e) => {
    setTicketData((prev) => ({ ...prev, update_message: e.target.value }));
  };

  const onChangeStatus = (e) => {
    setTicketData((prev) => ({ ...prev, status_id: parseInt(e.target.value) }));
  };

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const fileData = new FormData();
    const statusData = new FormData();
    const updateData = new FormData();

    fileData.append("conformeSlip", file);
    updateData.append("update_message", ticketData.update_message);
    statusData.append("status_id", ticketData.status_id);

    const requests = [
      axios.put(
        `${serverURL()}/ticket/updateMessage/${ticketInfo.ticket_id}`,
        updateData
      ),
      axios.put(
        `${serverURL()}/ticket/updateStatus/${ticketInfo.ticket_id}`,
        statusData
      ),
    ];

    // axios
    //   .all(requests)
    //   .then(
    //     axios.spread((response1, response2) => {
    //       console.log(response1.data);
    //       console.log(response2.data);
    //     })
    //   )
    //   .catch((error) => {
    //     console.error(error);
    //   });

    //   try {
    //     const [response1, response2] = await axios.all(requests)
    //     console.log(response1.data)
    //     console.log(response2.data)
    //   } catch (error) {
    //     console.log(error)
    //   }

    const submitFile = () => {
      try {
        axios.post(
          `${serverURL()}/ticket/generateConformeSlip/${ticketInfo.ticket_id}`,
          fileData,
          { headers: { "content-type": "multipart/form-data" } }
        );
      } catch (error) {
        console.log(error);
      }
    };

    const submitUpdate = () => {
      try {
        axios.put(
          `${serverURL()}/ticket/updateMessage/${ticketInfo.ticket_id}`,
          updateData,
          { headers: { "content-type": "multipart/form-data" } }
        );
      } catch (error) {
        console.log(error);
      }
    };

    const submitStatus = () => {
      try {
        axios.put(
          `${serverURL()}/ticket/updateStatus/${ticketInfo.ticket_id}`,
          statusData,
          { headers: { "content-type": "multipart/form-data" } }
        );
      } catch (error) {
        console.log(error);
      }
    };

    modalHandler();

    if (file !== null) {
      submitFile();
    }

    if (ticketData.update_message !== null) {
      submitUpdate()
    }

    if(ticketData.status_id !== null){
      submitStatus()
    }

    window.location.reload();
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <p className="font-semibold">Ticket ID :</p>
          <p>{ticketInfo.ticket_id}</p>
        </div>
        <div className="flex gap-5">
          <p className="font-semibold">Customer :</p>
          <p>{fullname}</p>
        </div>
        <div className="flex gap-5">
          <p className="font-semibold">Description :</p>
          <p>{ticketInfo.description}</p>
        </div>
        <div className="flex gap-5">
          <p className="font-semibold">Start :</p>
          <p>4/2/2023</p>
        </div>

        <div className="flex gap-5">
          <p className="font-semibold">Received Slip:</p>
          <p>{filename(ticketInfo.conformeSlip)}</p>
        </div>

        <div className="flex gap-5">
          <p className="font-semibold">Received Payment:</p>
          <p>{filename(ticketInfo.proofOfPayment)}</p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
          <div className="flex gap-5">
            <p className="font-semibold">Status :</p>
            <select
              className="max-w-50px block py-0 px-0 text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              onChange={onChangeStatus}
              value={ticketData.status_id}
            >
              <option value={1}>new</option>
              <option value={2}>pending</option>
              <option value={3}>closed</option>
            </select>
          </div>

          <div className="flex gap-5">
            <p className="font-semibold">Update:</p>
            <input
              type="text"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              value={ticketData.update_message}
              onChange={onChangeUpdate}
            ></input>
          </div>

          <div className="flex gap-5">
            <p className="font-semibold">Amount:</p>
            <input
              type="number"
              className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
              // value={ticketData.update_message}
              // onChange={onChangeUpdate}
            ></input>
          </div>

          <div className="flex gap-5">
            <p className="font-semibold">Upload Slip :</p>
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
                onChange={onChangeFile}
              />
            </div>
          </div>

          <button
            type="submit"
            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </form>

        {/* <div className="flex gap-5">
            <p className="font-semibold">Attach Conforme Slip :</p>
            <p>tiffany.pdf</p>
          </div> */}
      </div>
    </>
  );
};

export default SalesModal;
