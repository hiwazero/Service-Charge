import React, { useState } from "react";
import style from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const isLogin = useSelector(state => state.auth.isAuth) //redux

  const [showNav, setShowNav] = useState(false);
  const [login, setLogin] = useState(true);

  const clickHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  const menuButton = login && (
    <div className="mr-4 w-auto block sm:hidden" onClick={clickHandler}>
      <button className="w-auto ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );

  const menuBar = showNav && (
    <div className="z-20 h-screen w-full fixed top-0 bg-gray-600 bg-opacity-90" onClick={clickHandler}>
      <div
        className={`${style.wrapper} w3-animate-right h-screen w-3/5 ml-auto`}
      >
        <nav className="flex flex-col text-white text-left pl-4 pt-8  tracking-wider leading-10">
          <Link to='customerForm'>Add Customer</Link>
          <a href="#">Add Employee</a>
          <a href="#">Add Admin</a>
          <a href="#">Customer Accounts</a>
          <a href="#">Employee Accounts</a>
          <a href="#">Admin Accounts</a>
          <Link to={'tickets'}>View Tickets</Link>
          <a href="#">Monthly Reports</a>
          <a href="#">Logout</a>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`${style.wrapper} flex flex-col h-20 justify-center w-screen`}
      >
        <div className={`${style.container} flex items-center`}>
          <div className="w-full text-xl flex flex-row ml-2">
            <h1>Service Charge</h1>
          </div>
          {menuButton}
        </div>
      </div>
      {menuBar}
    </>
  );
};

export default Navigation;
