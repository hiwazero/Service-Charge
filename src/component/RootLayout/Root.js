import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../UI/Navigation/Navigation";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
