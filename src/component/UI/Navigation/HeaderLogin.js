import style from "./HeaderLogin.module.css";
const HeaderLogin = () => {
  return (
    <div
      className={`${style.wrapper} flex flex-col h-20 justify-center w-screen relative`}
    >
      <div className={`${style.container} flex items-center`}>
        <div className="w-full text-xl flex flex-row ml-4">
          {/* <img src="https://alliance.com.ph/images/asi-logo.svg"></img> */}
          <img src="https://alliance.com.ph/images/asi-logo-invert.svg"></img>
          <h1>Service Charge</h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
