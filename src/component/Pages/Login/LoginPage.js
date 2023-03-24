import React, { useState } from "react";
import style from "./LoginPage.module.css";
import { useDispatch } from "react-redux";

import { authActions } from "../../../store/auth";
import { useNavigate } from "react-router-dom";
import HeaderLogin from "../../UI/Navigation/HeaderLogin";

//max-w-lg mx-auto mt-40
const Login = (props) => {
  const [loginInfo, setLoginInfo] = useState({ user_type: "Customer" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(loginInfo);

  const inputHandler = (e) => {
    const { id, value } = e.target;

    setLoginInfo((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login()); //set the isAuth value into TRUE

    if (loginInfo.user_type === "Admin") {
      navigate("admin/customerForm");
    }
  };

  return (
    <>
      <HeaderLogin />
      <div className={`${style.background} z-0 h-screen bg-no-repeat bg-cover bg-bottom bg-blend-color`}>
        <div
          className={`${style.login} z-10 bg-white shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-9/12 sm:w-2/5`}
        >
          <form onSubmit={loginHandler}>
            {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={inputHandler}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onChange={inputHandler}
            />
          </div> */}

            {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user_type"
            >
              Login as:
            </label>

            <select
              data-te-select-init
              className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="user_type"
              onChange={inputHandler}
            >
              <option>Customer</option>
              <option>Employee</option>
              <option>Admin</option>
            </select>
          </div> */}

            <div className="relative z-10 w-full mb-6 group">
              <input
                type="username"
                name="floating_username"
                id="username"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={inputHandler}
                required
              />
              <label
                htmlFor="floating_username"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Username
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="floating_password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-500 dark:focus:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={inputHandler}
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-gray-700 peer-focus:dark:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>

            <div className="mb-4">
              <label
                htmlFor="user_type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Login as:
              </label>
              <select
                id="user_type"
                className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-3/5 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500"
                onChange={inputHandler}
              >
                <option value="Customer">Customer</option>
                <option value="Employee">Employee</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between">
                <button
                  className={`${style.loginButton} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  type="submit"
                >
                  Sign In
                </button>
                <a
                  className={`${style.forgotPassword} inline-block align-baseline font-bold text-sm`}
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
