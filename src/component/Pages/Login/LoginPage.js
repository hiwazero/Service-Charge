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
      <div
        className={`${style.login} z-10  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-9/12 sm:w-2/5`}
      >
        <form onSubmit={loginHandler}>
          <div className="mb-4">
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
          </div>

          <div className="mb-4">
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
    </>
  );
};

export default Login;
