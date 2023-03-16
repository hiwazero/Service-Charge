import { useState } from "react";
import style from "./MenuBar.module.css";
import { useSelector } from "react-redux";

const Menubar = () => {
  // const isLogin = useSelector(state => state.auth.isAuth) //redux
  const isLogin = true
  const [showNav, setShowNav] = useState(false);

  const clickHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  const menuButton = isLogin && (
    <div className={`${style.button} mr-4 w-auto block sm:hidden`} onClick={clickHandler}>
      <button className="w-auto">
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

  return <>{menuButton}</>;
};

export default Menubar;
