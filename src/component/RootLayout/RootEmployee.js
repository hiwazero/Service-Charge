import HeaderEmployee from "../UI/Header/HeaderEmployee";
import { Outlet } from "react-router-dom";

const RootEmployee = () => {
  return (
    <>
      <HeaderEmployee />
      <Outlet />
    </>
  );
};

export default RootEmployee;
