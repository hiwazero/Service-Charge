import React, { useState } from "react";
import style from "./Navigation.module.css";

const Navigation = (props) => {
  const [showNav, setShowNav] = useState(true);
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
    <div className={`${style.wrapper} w3-animate-top`}>
      <nav className="flex flex-col text-white text-center">
        <a href="#">Navigation 1</a>
        <a href="#">Navigation 2</a>
        <a href="#">Navigation 3</a>
        <a href="#">Navigation 4</a>
        <a href="#">Navigation 5</a>
      </nav>
    </div>
  );

  return (
    <>
      <div className={`${style.wrapper} flex flex-col h-24 justify-center w-screen`}>
        <div className={`${style.container} flex items-center`}>
          <div className="w-full text-xl flex flex-row">
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
