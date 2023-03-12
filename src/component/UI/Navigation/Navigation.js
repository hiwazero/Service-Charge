import React, { useState } from "react";
import style from "./Navigation.module.css";

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  console.log(showNav);

  const clickHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col bg-yellow-500 lg:bg-red-50">
      <div className={`${style.container} h-24 flex items-center`}>
        <div className="w-full text-xl">
          <h1>Service Charge</h1>
        </div>
        <div className="" onClick={clickHandler}>
          <button className="w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {showNav && <div className="">
        <nav className="flex flex-col">
            <a href="#">Navigation 1</a>
            <a href="#">Navigation 2</a>
            <a href="#">Navigation 3</a>
            <a href="#">Navigation 4</a>
            <a href="#">Navigation 5</a>
        </nav>
      </div>}
      
    </div>
  );
};

export default Navigation;
