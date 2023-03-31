import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menubar from "../UI/Navigation/MenuBar";

import Navigation from "../UI/Navigation/NavigationAdmin";

const RootLayout = () => {
  return (
    <div className="w3-animate-opacity">
      <Navigation />
      <Outlet className="w3-animate-opacity" />
    </div>
  );
};

export default RootLayout;
