import axios from "axios";
import { useCallback, useState } from "react";
import { serverURL } from "../../../server/serverURL";
import AccountTable from "./Table/AccountTable";
import ModalOverlay from "../../UI/Modal/ModalOverlay";
import ModalCard from "../../UI/Modal/ModalCard";

const AccountForm = () => {
  const [register, setRegister] = useState({
    gender: "M",
    birth_date: "2/10/2023",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState({
    modal: false,
    register: false,
    edit: false
  });

  const modalHandler = () => {
    setShowModal((prevState) => ({
      ...prevState,
      modal: false,
      register: false,
      role: false,
    }));
  };

  const toggleRegister = () => {
    setShowModal((prevState) => ({
      ...prevState,
      register: !prevState.register,
      modal: !prevState.modal,
    }));
  };

  const stateHandler = useCallback(() => {
    setSubmitted(false);
  }, []);

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setRegister((prevState) => ({ ...prevState, [id]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);

    axios.post(`${serverURL()}/users/createUser`, register, {
      headers: { "Content-Type": "application/json" },
    });
  };

  const modalOverlay = showModal.modal && (
    <ModalOverlay modalHandler={modalHandler} />
  );

  const registerForm = showModal.register && (
    <ModalCard>
      <div className="p-4 rounded-lg border-2 border-gray-200 shadow-sm">
        <form onSubmit={submitHandler}>
          <div className="flex flex-col sm:flex-row">
            <div className="relative z-10 w-full mx-2 my-5 group sm:w-2/6">
              <input
                type="text"
                name="floating_username"
                id="first_name"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                onChange={inputHandler}
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First Name
              </label>
            </div>

            <div className="relative z-10 w-full mx-2 my-5 group sm:w-2/6">
              <input
                type="text"
                name="floating_username"
                id="middleName"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                // onChange={inputHandler}
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Middle Name
              </label>
            </div>

            <div className="relative z-10 w-full mx-2 my-5 group sm:w-2/6">
              <input
                type="text"
                name="floating_username"
                id="last_name"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                onChange={inputHandler}
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last Name
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="my-5 w-1/2 sm:w-2/6 mx-2">
              <label
                className="block text-sm font-medium text-gray-900 dark:text-black"
                htmlFor="birthdate"
              >
                Gender
              </label>
              <select
                id="gender"
                className="block py-2.5 px-0 w-full text-xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={inputHandler}
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            <div className="my-5 w-1/2 sm:w-2/6 mx-2">
              <label
                className="block text-sm font-medium text-gray-900 dark:text-black"
                htmlFor="birthdate"
              >
                Birthdate
              </label>

              <input
                className="block py-2.5 px-0 w-full text-xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                id="birth_date"
                type="date"
                placeholder="Birthdate"
                // onChange={inputHandler}
              />
            </div>

            <div className="my-5 w-1/2 sm:w-2/6 mx-2">
              <label
                className="block text-sm font-medium text-gray-900 dark:text-black"
                htmlFor="birthdate"
              >
                Role
              </label>
              <select
                id="role"
                className="block py-2.5 px-0 w-full text-xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={inputHandler}
              >
                <option value="1">Customer</option>
                <option value="2">Admin</option>
                <option value="3">Employee</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="relative z-10 w-full sm:w-3/4 mx-2 my-5 group">
              <input
                type="text"
                name="floating_username"
                id="address"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                onChange={inputHandler}
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>

            <div className="relative z-10 w-full sm:w-1/4 mx-2 my-5 group">
              <input
                type="number"
                name="floating_username"
                id="zipcode"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                onChange={inputHandler}
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Zipcode
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="relative z-10 w-full sm:w-3/4 mx-2 my-5 group">
              <input
                type="email"
                name="floating_username"
                id="email"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                onChange={inputHandler}
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>

            <div className="relative z-10 w-full sm:w-1/4 mx-2 my-5 group">
              <input
                type="number"
                name="floating_username"
                id="phone_number"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                onChange={inputHandler}
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone Number
              </label>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between">
              <button
                className={`bg-alliance hover:bg-alliance-darker text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </ModalCard>
  );

  return (
    <>
      {modalOverlay}
      {registerForm}
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14 border-2 border-gray-200 shadow-sm">
          <AccountTable
            submitted={submitted}
            stateHandler={stateHandler}
            toggleRegister={toggleRegister}
          />
        </div>
      </div>
    </>
  );
};

export default AccountForm;
