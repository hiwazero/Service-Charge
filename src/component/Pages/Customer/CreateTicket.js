import axios from "axios";
import { useState } from "react";
import { serverURL } from "../../../server/serverURL";
import { userId } from "../../../hooks/userId";

// const currentDate = new Date().toLocaleDateString();
const currentDate = new Date();

const CreateTicket = () => {
  const [ticket, setTicket] = useState({
    assignee_id: 2,
    status_id: 1,
    user_id: userId(),
    description: "",
    ticket_start: "2023-03-31",
    ticket_end: "2023-03-31",
  });

  const onChangeHandler = (e) => {
    const { id, value } = e.target;

    setTicket((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(ticket);

    if (window.confirm("Are you sure you want to submit ticket?")) {
      try {
        axios.post(`${serverURL()}/ticket/create`, ticket, {
          headers: { "Content-Type": "application/json" },
        });

        alert("Ticket created succesfully");
      } catch (error) {
        alert("Ticket creation failed");
      }

      document.getElementById("description").value = "";
    } else {
      return;
    }
  };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14 border-2 border-gray-200 shadow-sm min-h-screen">
          <div className="my-10 p-10 border border-2 border-gray-400 border-dashed min-h-screen">
            <form
              className="flex flex-col mx-auto gap-5 max-w-lg"
              onSubmit={submitHandler}
            >
              <fieldset className="contents">
                <div className="flex flex-col">
                  <div
                    className="bg-blue-100 text-md rounded-lg py-5 px-6 mb-4 text-base text-blue-700 mb-3"
                    role="alert"
                  >
                    Let us help you quickly and efficiently! If you're
                    experiencing any issues, please don't hesitate to create a
                    ticket and our team will be happy to assist you.
                  </div>

                  {/* <label className="mb-12">
                    Let us help you quickly and efficiently! If you're
                    experiencing any issues, please don't hesitate to create a
                    ticket and our team will be happy to assist you.
                  </label> */}

                  <label htmlFor="input" className="font-semibold text-lg">
                    Enter product issue
                  </label>
                  <textarea
                    name="input"
                    id="description"
                    rows="10"
                    maxLength="256"
                    required=""
                    placeholder="Eg. The main issue that I have encountered is that the laptop freezes frequently and runs very slow even when performing basic tasks. I have tried to resolve the issue by updating the drivers and running diagnostic tests, but it has not improved the performance of the laptop. I am not satisfied with the quality of the laptop and it has caused me significant inconvenience and frustration as it has disrupted my work."
                    className="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-lg"
                    onChange={onChangeHandler}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="18"
                    height="18"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-bold">Generate ticket</span>
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
