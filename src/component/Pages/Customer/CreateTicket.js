import axios from "axios";
import { useState } from "react";
import { serverURL } from "../../../server/serverURL";

const CreateTicket = () => {
  const [ticket, setTicket] = useState({});

  console.log(ticket);

  const onChangeHandler = (e) => {
    const { id, value } = e.target;

    setTicket((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post(`${serverURL()}/ticket/create`, ticket, {
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <>
      {/* <div
        className={`${style.form} relative shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-9/12 sm:w-2/5`}
      >
        <form onSubmit={submitHandler}>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_firstName"
              id="assignee_id"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={onChangeHandler}
              required
            />
            <label
              htmlFor="floating_firstName"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Assignee
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="floating_username"
              id="user_id"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={onChangeHandler}
              required
            />
            <label
              htmlFor="floating_username"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Id
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="floating_address"
              id="status_id"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={onChangeHandler}
              required
            />
            <label
              htmlFor="floating_address"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Status Id
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_zipcode"
              id="description"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={onChangeHandler}
              required
            />
            <label
              htmlFor="floating_zipcode"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_email"
              id="ticketstart"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={onChangeHandler}
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ticket Start
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_phoneNumber"
              id="ticketend"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={onChangeHandler}
              required
            />
            <label
              htmlFor="floating_phoneNumber"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ticket End
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_phoneNumber"
              id="file"
              className="block py-2.5 px-0 w-full sm:w-2/4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={onChangeHandler}
              required
            />
            <label
              htmlFor="floating_phoneNumber"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              File
            </label>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between">
              <button
                className={`${style.submitButton} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                type="submit"
              >
                Create Ticket
              </button>
            </div>
          </div>
        </form>
      </div> */}

      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14 border-2 border-gray-200 shadow-sm">
          {/* <form>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Description
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-400 focus:border-gray-400"
              placeholder="Write your issues here..."
            ></textarea>

            <button
              className={`my-6 bg-alliance text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline`}
              type="submit"
            >
              Create Ticket
            </button>
          </form> */}
          <div className="mt-10 p-10">
            <form className="flex flex-col mx-auto gap-2 max-w-lg">
              <fieldset className="contents">
                <div className="flex flex-col">
                  <label htmlFor="input" className="font-semibold text-lg">
                    Enter product issue
                  </label>
                  <textarea
                    name="input"
                    id="input"
                    rows="8"
                    maxLength="256"
                    required=""
                    placeholder="Eg. A new and innovative water bottle that keeps drinks cold for 24 hours. [Max 256 chars]"
                    className="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-lg"
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
