import { Outlet } from "react-router-dom";
import MainHeader from "../UI/Header/MainHeader";

const RootLayout = () => {
  return (
    <div className="w3-animate-opacity">
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default RootLayout;
