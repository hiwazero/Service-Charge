import axios from "axios";
import { useEffect, useState } from "react";

import AccountTable from "./Table/AccountTable";
import ModalOverlay from "../../UI/Modal/ModalOverlay";
import ModalCard from "../../UI/Modal/ModalCard";
import { serverURL } from "../../../server/serverURL";

import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../../store/toggle";
import { dateFormatter } from "../../../hooks/dateFormatter";
import { fetchData } from "../../../store/role";

const AccountForm = () => {
  const dispatch = useDispatch();
  const { data: roles } = useSelector((state) => state.role);

  const [register, setRegister] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    birth_date: "",
    role_id: 0,
    address: "",
    zipcode: 0,
    email: "",
    phone_number: "",
    gender: "male",
    role_id: 1,
  });

  const [edit, setEdit] = useState(false);

  const [showModal, setShowModal] = useState({
    modal: false,
    register: false,
    edit: false,
  });

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const modalHandler = () => {
    setShowModal((prevState) => ({
      ...prevState,
      modal: false,
      register: false,
      role: false,
    }));

    setEdit(false);
  };

  const toggleEdit = (users) => {
    setShowModal((prevState) => ({
      ...prevState,
      register: !prevState.register,
      modal: !prevState.modal,
    }));
    setEdit(true);

    setRegister((prevState) => ({
      ...prevState,
      ...users,
      birth_date: dateFormatter(users.birth_date),
    }));
  };

  const toggleRegister = () => {
    setShowModal((prevState) => ({
      ...prevState,
      register: !prevState.register,
      modal: !prevState.modal,
    }));
  };

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setRegister((prevState) => ({ ...prevState, [id]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (edit === false) {
      var username = "";
      if (
        register.first_name !== undefined &&
        register.last_name !== undefined
      ) {
        username = `${register.first_name[0] + register.last_name}`;
      }

      const registerData = {
        ...register,
        username: username,
        password: username,
      };

      axios.post(`${serverURL()}/users/createUser`, registerData, {
        headers: { "Content-Type": "application/json" },
      });
    } else if (edit === true) {
      axios
        .put(`${serverURL()}/users/updateUser/${register.user_id}`, register, {
          headers: { "Content-Type": "application/json" },
        })
        .catch((e) => console.log(e));

      setShowModal((prevState) => ({
        ...prevState,
        register: !prevState.register,
        modal: !prevState.modal,
      }));

      setRegister({
        first_name: "",
        middle_name: "",
        last_name: "",
        birth_date: "",
        role_id: 0,
        address: "",
        zipcode: 0,
        email: "",
        phone_number: "",
        gender: "male",
        role_id: 1,
      });
      setEdit(false);
    }

    // setRegister({
    //   gender: "male",
    //   date: new Date(Date.now()).toISOString().slice(0, 10),
    //   role_id: 1,
    // });
 
    dispatch(toggleActions.toggleSet());
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
                value={register.first_name}
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
                id="middle_name"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                onChange={inputHandler}
                value={register.middle_name}
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
                value={register.last_name}
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
                value={register.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
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
                onChange={inputHandler}
                required
                value={register.birth_date}
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
                id="role_id"
                className="block py-2.5 px-0 w-full text-xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                onChange={inputHandler}
                value={register.role_id}
              >
                {roles.map((role) => (
                  <option key={role.role_id} value={role.role_id}>
                    {role.role}
                  </option>
                ))}
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
                value={register.address}
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
                value={register.zipcode}
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
                value={register.email}
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
                value={register.phone_number}
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
            toggleRegister={toggleRegister}
            toggleEdit={toggleEdit}
          />
        </div>
      </div>
    </>
  );
};

export default AccountForm;
