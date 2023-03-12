import React, { useState } from "react";
import style from "./Login.module.css";

//max-w-lg mx-auto mt-40
const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  console.log(loginInfo);

  const inputHandler = (e) => {
    const { id, value } = e.target;

    setLoginInfo((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("working");
  };

  return (
    <div
      className={`${style.login} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-9/12 sm:w-2/5`}
    >
      <form>
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
            htmlFor="password"
          >
            Login as:
          </label>
          <select className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>Customer</option>
            <option>Employee</option>
            <option>Admin</option>
          </select>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={loginHandler}
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
