import style from "./HeaderContent.module.css";
import { useState } from "react";

const HeaderContent = () => {
  const [showNav, setShowNav] = useState(false);

  console.log(showNav)

  const showHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  // const modal = (
  //   <div>

  //   </div>
  // )

  const menuButton = (
    <div className="mr-4 w-auto block sm:hidden" onClick={showHandler}>
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

  return (
      <div
        className={`${style.wrapper} flex flex-col h-20 justify-center w-screen`}
      >
        <div className={`${style.container} flex items-center`}>
          <div className="w-full text-xl flex flex-row">
            <h1>Service Charge</h1>
          </div>
          {menuButton}
        </div>
      </div>
  );
};

export default HeaderContent;
