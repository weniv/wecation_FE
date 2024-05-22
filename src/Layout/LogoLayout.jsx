import React from "react";
import { Outlet } from "react-router-dom";
import { LogoHeader } from "../components/common";

const NavLayout = () => {
  return (
    <div>
      <LogoHeader />
      <Outlet />
    </div>
  );
};

export default NavLayout;
