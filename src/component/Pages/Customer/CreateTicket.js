import axios from "axios";
import { useState } from "react";
import { serverURL } from "../../../server/serverURL";
// import NavigationUser from "../../UI/Navigation/NavigationUser";
import style from "./CreateTicket.module.css";

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
          <form>
            <label
              htmlFor="message"
              class="block mb-2 text-sm font-bold text-gray-900"
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
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
